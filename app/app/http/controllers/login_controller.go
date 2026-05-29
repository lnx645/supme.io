package controllers

import (
	"github.com/goravel/framework/contracts/http"
	"github.com/lnx645/supme.io/app/http/requests"
)

type LoginController struct{}

func NewLoginController() *LoginController {
	return &LoginController{}
}
func (c *LoginController) Login(ctx http.Context) http.Response {

	var postData requests.LoginPostRequest
	errors, err := ctx.Request().ValidateRequest(&postData)
	if err != nil {
		return ctx.Response().Status(http.StatusInternalServerError).Json(http.Json{
			"message": "Terjadi kesalahan pada server.",
		})
	}
	if errors != nil {
		return ctx.Response().Status(http.StatusUnprocessableEntity).Json(errors.All())
	}
	//sekarang cek
	return ctx.Response().Success().Json("WKWK")
}
