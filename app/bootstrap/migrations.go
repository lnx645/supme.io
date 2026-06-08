package bootstrap

import (
	"github.com/goravel/framework/contracts/database/schema"

	"github.com/lnx645/supme.io/database/migrations"
)

func Migrations() []schema.Migration {
	return []schema.Migration{
		&migrations.M20210101000001CreateJobsTable{},
		&migrations.M20260530110109CreateUsersTable{},
		&migrations.M20260530111740UpdateUsersTable{},
		&migrations.M20260530114803UpdateUserAuthLogTable{},
		&migrations.M20260530114828CreateUserAuthLogTable{},
		&migrations.M20260607131145CreateCreatorTable{},
		&migrations.M20260607132554CreateCreatorCategoryTable{},
		&migrations.M20260607132952AddCategoryToCreatorTable{},
		&migrations.M20260607133553AddOverlayKeyToCreatorTable{},
	}
}
