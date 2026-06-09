package routes

import (
	"github.com/goravel/framework/contracts/route"
	"github.com/lnx645/supme.io/app/facades"
	"github.com/lnx645/supme.io/app/http/controllers"
	"github.com/lnx645/supme.io/app/http/controllers/ws"
	"github.com/lnx645/supme.io/app/http/middleware"
)

func Web() {

	login := controllers.NewLoginController()
	userController := controllers.NewUserController()
	overlayWebsocket := controllers.NewOverlayWebsocketController()
	categoryController := controllers.NewCategoryController()
	testOverlayController := ws.NewTestOverlayController()

	routes := facades.Route()
	routes.Post("/api/login", login.Login).Name("auth.login")
	routes.Get("/realtime/overlay", overlayWebsocket.Index).Name("overlay.websocket")
	routes.Post("/overlay/test", testOverlayController.Index).Name("websocket")
	//auth middleware only
	routes.Middleware(middleware.AuthMiddleware()).Prefix("api").Group(func(router route.Router) {
		router.Get("users", userController.Index)
		router.Get("user", userController.User)

		router.Prefix("category").Group(func(router route.Router) {
			router.Get("", categoryController.Index)
		})

	})

	routes.Static("public", "./public")
	routes.Static("static", "./public/dist/static")

	Frontend()

}
