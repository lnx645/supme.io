package bootstrap

import (
	"github.com/goravel/framework/contracts/database/schema"

	"github.com/lnx645/supme.io/database/migrations"
)

func Migrations() []schema.Migration {
	return []schema.Migration{
		&migrations.M20210101000001CreateJobsTable{},
	}
}
