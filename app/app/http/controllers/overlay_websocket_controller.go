package controllers

import (
	"github.com/goravel/framework/contracts/http"
	"github.com/gorilla/websocket"
	"github.com/lnx645/supme.io/app/services"
)

type OverlayWebsocketController struct {
	Upgrader *websocket.Upgrader
}

func NewOverlayWebsocketController() *OverlayWebsocketController {
	return &OverlayWebsocketController{}
}

func (r *OverlayWebsocketController) Index(ctx http.Context) http.Response {
	return services.OverlayHub.CreateWs(ctx)
}
