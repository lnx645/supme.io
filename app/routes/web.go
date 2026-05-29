package routes

import (
	"github.com/lnx645/supme.io/app/facades"
	"github.com/lnx645/supme.io/app/http/controllers"
)

func Web() {

	login := controllers.NewLoginController()
	facades.Route().Post("/api/login", login.Login).Name("auth.login")

	facades.Route().Static("public", "./public")
	facades.Route().Static("static", "./public/dist/static")

	userController := controllers.NewUserController()
	facades.Route().Get("/users", userController.Index)
	facades.Route().Get("/user", userController.User)

	Frontend()

}
