package controllers

import (
	"errors"

	"github.com/goravel/framework/contracts/http"
	"github.com/lnx645/supme.io/app/facades"
	"github.com/lnx645/supme.io/app/http/requests"
	"github.com/lnx645/supme.io/app/models"
)

type LoginController struct{}

func NewLoginController() *LoginController {
	return &LoginController{}
}
func (c *LoginController) Login(ctx http.Context) http.Response {

	var postData requests.LoginPostRequest
	errs, err := ctx.Request().
		ValidateRequest(&postData)
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
			Json(errs.All())
	}

	var user models.User

	if err = facades.DB().
		Table("users").
		Where("email", postData.Email).
		OrWhere("username", postData.Email).
		FirstOr(&user, func() error {
			return errors.New("User tidak ditemukan!")
		}); err != nil {
		return ctx.Response().
			Status(http.StatusNotFound).
			Json(http.Json{
				"message": err.Error(),
			})
	}
	if facades.Hash().Check(postData.Password, user.Password) {
		token, err := facades.Auth(ctx).LoginUsingID(user.ID)

		if err != nil {
			return ctx.Response().
				Status(http.StatusNotFound).
				Json(http.Json{
					"message": err.Error(),
				})
		}

		return ctx.Response().
			Success().
			Json(http.Json{
				"jwt":  token,
				"type": "Bearer",
				"user": user,
			})

	} else {
		return ctx.Response().
			Status(http.StatusNotFound).
			Json(http.Json{
				"message": "Login gagal username atau password salah",
			})
	}
}
