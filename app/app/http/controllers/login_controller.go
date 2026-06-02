package controllers

import (
	"errors"

	"github.com/goravel/framework/contracts/http"
	"github.com/lnx645/supme.io/app/facades"
	"github.com/lnx645/supme.io/app/http/requests"
	"github.com/lnx645/supme.io/app/models"
	"github.com/lnx645/supme.io/app/services"
)

type LoginController struct {
	authService services.AuthLoginService
}

func NewLoginController() *LoginController {
	return &LoginController{
		authService: *services.NewLoginService(),
	}
}

func (c *LoginController) Login(ctx http.Context) http.Response {
	var postData requests.LoginPostRequest
	errs, err := ctx.Request().
		ValidateRequest(&postData)

	ipAddress := ctx.Request().
		Ip()
	userAgent := ctx.Request().
		Header("User-Agent", "Unknown")

	if err != nil {
		return ctx.Response().
			Status(http.StatusInternalServerError).
			Json(http.Json{
				"message": "Terjadi kesalahan pada server.",
			})
	}
	if errs != nil {
		return ctx.Response().
			Status(http.StatusUnprocessableEntity).
			Json(http.Json{
				"message": "Validation error",
				"errors":  errs.All(),
				"status":  http.StatusUnprocessableEntity,
			})
	}

	var user models.User
	if err = facades.DB().
		Table("users").
		Where("email", postData.Email).
		OrWhere("username", postData.Email).
		FirstOr(&user, func() error {
			return errors.New("User tidak ditemukan!")
		}); err != nil {
		c.authService.Record("Login gagal", ipAddress, userAgent, user.ID, false, err.Error())
		return ctx.Response().
			Status(http.StatusNotFound).
			Json(http.Json{
				"message": err.Error(),
			})
	}
	//cek dulu password disini cocokan password yang di hash dengan
	//password yang di kirim dari formulir
	if facades.Hash().Check(postData.Password, user.Password) {
		//login dengan auth bawaan goravel
		token, err := facades.Auth(ctx).LoginUsingID(user.ID)
		c.authService.Record("Login Berhasil", ipAddress, userAgent, user.ID, true, "Login Berhasil!")
		if err != nil {
			//response errornya
			return ctx.Response().
				Status(http.StatusNotFound).
				Json(http.Json{
					"message": err.Error(),
				})
		}
		//set cookie session nya
		c.authService.
			SetAuthCookieWithContext(token, ctx)
		return ctx.Response().
			Success().
			Json(http.Json{
				"jwt":  token,
				"type": "Bearer",
				"user": user,
			})

	} else {
		c.authService.Record("Login Gagal", ipAddress, userAgent, user.ID, false, "Login gagal username atau password salah")
		return ctx.Response().
			Status(http.StatusNotFound).
			Json(http.Json{
				"message": "Login gagal username atau password salah",
			})
	}
}
