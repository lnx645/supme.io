package routes

import (
	"github.com/goravel/framework/contracts/http"
	"github.com/lnx645/supme.io/app/facades"
)

func Frontend() {
	facades.Route().Fallback(func(ctx http.Context) http.Response {
		return ctx.Response().View().Make("welcome.tmpl")
	})
}
