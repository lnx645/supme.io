package ws

import (
	"github.com/goravel/framework/contracts/http"
	"github.com/lnx645/supme.io/app/services"
)

type TestOverlayController struct {
	// Dependent services
}

func NewTestOverlayController() *TestOverlayController {
	return &TestOverlayController{
		// Inject services
	}
}

func (r *TestOverlayController) Index(ctx http.Context) http.Response {

	key := ctx.Request().Query("key")
	services.Overlay.BroadcastToToken(key, map[string]string{
		"event": "test_event",
		"data":  "Selamat datang di Supme.io!",
	})
	return ctx.Response().Success().Json(http.Json{
		"status":  "success",
		"message": "Message broadcasted to overlay clients with token: " + key,
	})
}
