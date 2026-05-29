package tests

import (
	"github.com/goravel/framework/testing"

	"github.com/lnx645/supme.io/bootstrap"
)

func init() {
	bootstrap.Boot()
}

type TestCase struct {
	testing.TestCase
}
