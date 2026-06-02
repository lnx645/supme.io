package middleware

import (
	"encoding/json"
	"errors"
	"fmt"
	"time"

	"github.com/goravel/framework/auth"
	"github.com/goravel/framework/contracts/http"
	"github.com/lnx645/supme.io/app/facades"
	"github.com/lnx645/supme.io/app/models"
	"github.com/lnx645/supme.io/app/services"
)

func AuthMiddleware() http.Middleware {

	authService := services.NewLoginService()

	return func(ctx http.Context) {
		auth_token := ctx.Request().Cookie("token_auth__")
		_, err := facades.Auth(ctx).Parse(auth_token)

		if errors.Is(err, auth.ErrorTokenExpired) {
			tkn, refreshErr := facades.Auth(ctx).Refresh()
			if refreshErr != nil {
				ctx.Response().Status(401).Json(http.Json{
					"message": "Sesi habis, silakan login",
				}).Abort()
				return
			}
			authService.SetAuthCookieWithContext(tkn, ctx)
		}
		var currentUser models.User

		token, err := facades.Auth(ctx).ID()
		if err != nil {
			ctx.Response().Status(http.StatusUnauthorized).Json(http.Json{
				"message": err.Error(),
				"err":     err.Error(),
				"status":  http.StatusUnauthorized,
			}).Abort()
			return
		}
		key := fmt.Sprintf("user:%s", token)
		//dapatkan cache per user agar tidak query ke db tiap request
		if facades.Cache().Has(key) {
			//ambil datanya dalam bentuk json
			cacheData := facades.Cache().Get(key)
			//selanjutnya validasi datanya
			if strData, ok := cacheData.(string); ok {
				//ubah jadi struct
				if err = json.Unmarshal([]byte(strData), &currentUser); err != nil {
					facades.Log().Error(err.Error())
				}

			}
		} else {
			_ = facades.Auth(ctx).User(&currentUser)
			jsonData, _ := json.Marshal(&currentUser)
			err = facades.Cache().Put(key, string(jsonData), time.Minute)
			if err != nil {
				facades.Log().Info("Data Berhasil di simpan")
			} else {
				facades.Log().Info("Data gagal di simpan di cache")
			}
		}
		ctx.WithValue("user", currentUser)
		ctx.Request().Next()

	}
}
