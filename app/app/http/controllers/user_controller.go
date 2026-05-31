package controllers

import (
	"fmt"

	"github.com/goravel/framework/contracts/http"
	"github.com/lnx645/supme.io/app/models"
)

type UserController struct{}

func NewUserController() *UserController {
	return &UserController{}
}

func (r *UserController) Index(ctx http.Context) http.Response {
	return ctx.Response().Success().Json(http.Json{
		"Hisss": "Nama Saya ssukarta",
	})
}

func (r *UserController) User(ctx http.Context) http.Response {
	user := ctx.Value("user").(models.User)
	fmt.Println(user.Name)
	return ctx.Response().Success().Json(http.Json{
		"HHS":  "WS",
		"user": user,
	})
}
