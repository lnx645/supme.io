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
		if errors.Is(err, auth.ErrorRefreshTimeExceeded) {
			ctx.Response().Status(http.StatusUnauthorized).Json(http.Json{
				"message": err.Error(),
				"status":  http.StatusUnauthorized,
			}).Abort()
			return
		}
		if errors.Is(err, auth.ErrorTokenExpired) {
			tkn, _ := facades.Auth(ctx).Refresh()
			authService.SetAuthCookieWithContext(tkn, ctx)
			return
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
		if facades.Cache().Has(key) {
			cacheData := facades.Cache().Get(key)
			if strData, ok := cacheData.(string); ok {
				_ = json.Unmarshal([]byte(strData), &currentUser)
			}
		} else {
			_ = facades.Auth(ctx).User(&currentUser)
			jsonData, _ := json.Marshal(&currentUser)
			err = facades.Cache().Put(key, string(jsonData), time.Hour)
			if err != nil {
				fmt.Println("❌ ERROR GAGAL SIMPAN CACHE:", err.Error())
			} else {
				fmt.Println("✅ SUKSES SIMPAN KE CACHE")
			}
		}
		ctx.WithValue("user", currentUser)
		ctx.Request().Next()

	}
}
