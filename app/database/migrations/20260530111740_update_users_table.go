package migrations

import (
	"github.com/goravel/framework/contracts/database/schema"
	"github.com/lnx645/supme.io/app/facades"
)

type M20260530111740UpdateUsersTable struct{}

// Signature The unique signature for the migration.
func (r *M20260530111740UpdateUsersTable) Signature() string {
	return "20260530111740_update_users_table"
}

// Up Run the migrations.
func (r *M20260530111740UpdateUsersTable) Up() error {
	if facades.Schema().HasTable("users") {
		facades.Schema().Table("users", func(table schema.Blueprint) {
			table.Char("whatsapp_number", 16).Nullable()
			table.Boolean("is_verified_account").Default(false)
		})
	}
	return nil
}

// Down Reverse the migrations.
func (r *M20260530111740UpdateUsersTable) Down() error {
	return nil
}
