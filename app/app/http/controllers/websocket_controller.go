package controllers

import (
	"fmt"
	http_2 "net/http"

	"github.com/goravel/framework/contracts/http"
	"github.com/gorilla/websocket"
)

type WebsocketController struct {
	// Dependent services
}

func NewWebsocketController() *WebsocketController {
	return &WebsocketController{
		// Inject services
	}
}

func (r *WebsocketController) Index(ctx http.Context) http.Response {

	upgrade := websocket.Upgrader{
		ReadBufferSize:  4096,
		WriteBufferSize: 4096,
		CheckOrigin: func(r *http_2.Request) bool {
			if r.Method != "GET" {
				fmt.Println("Method harus get")
				return false
			}
			if r.URL.Path != "/ws" {
				fmt.Println("path error")
				return false
			}
			return true
		},
	}
	ws, err := upgrade.Upgrade(ctx.Response().Writer(), ctx.Request().Origin(), nil)
	if err != nil {
		return ctx.Response().Success().Json(err.Error())
	}
	defer ws.Close()
	//websocket logic disini
	return nil
}
