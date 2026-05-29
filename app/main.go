package main

import (
	"github.com/lnx645/supme.io/bootstrap"
)

func main() {
	app := bootstrap.Boot()

	app.Start()
}
