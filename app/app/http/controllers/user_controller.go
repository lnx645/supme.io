package controllers

import (
	"errors"

	"github.com/goravel/framework/contracts/http"
	"github.com/lnx645/supme.io/app/facades"
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
	var creator models.User
	err := facades.Orm().
		Query().
		Model(&models.User{}).
		With("Creator").
		Where("users.id", user.ID).
		FirstOr(&creator, func() error {
			return errors.New("User Tidak Ditemukan")
		})
	if err != nil {
		return ctx.Response().Status(503).Json(err.Error())
	}
	return ctx.Response().Success().Json(http.Json{
		"data": creator,
	})
}
