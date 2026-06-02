package routes

import (
	"github.com/goravel/framework/contracts/route"
	"github.com/lnx645/supme.io/app/facades"
	"github.com/lnx645/supme.io/app/http/controllers"
	"github.com/lnx645/supme.io/app/http/middleware"
)

func Web() {

	websocket := controllers.NewWebsocketController()
	login := controllers.NewLoginController()
	userController := controllers.NewUserController()

	routes := facades.Route()
	routes.Post("/api/login", login.Login).Name("auth.login")
	routes.Get("/hub/ws/overlay", websocket.OverlayWebsocket).Name("websocket")
	routes.Get("/overlay/test", websocket.TestOverlay).Name("websocket")
	//auth middleware only
	routes.Middleware(middleware.AuthMiddleware()).Prefix("api").Group(func(router route.Router) {
		router.Get("users", userController.Index)
		router.Get("user", userController.User)
	})

	routes.Static("public", "./public")
	routes.Static("static", "./public/dist/static")

	Frontend()

}
