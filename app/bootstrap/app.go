package bootstrap

import (
	contractsfoundation "github.com/goravel/framework/contracts/foundation"
	"github.com/goravel/framework/foundation"

	"github.com/lnx645/supme.io/config"
	"github.com/lnx645/supme.io/routes"
)

func Boot() contractsfoundation.Application {
	return foundation.Setup().
		WithMigrations(Migrations).
		WithRouting(func() {
			routes.Web()
		}).
		WithProviders(Providers).
		WithConfig(config.Boot).
		Create()
}
