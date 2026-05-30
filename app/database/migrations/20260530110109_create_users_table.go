package migrations

import (
	"github.com/goravel/framework/contracts/database/schema"
	"github.com/lnx645/supme.io/app/facades"
)

type M20260530110109CreateUsersTable struct{}

// Signature The unique signature for the migration.
func (r *M20260530110109CreateUsersTable) Signature() string {
	return "20260530110109_create_users_table"
}

// Up Run the migrations.
func (r *M20260530110109CreateUsersTable) Up() error {
	if !facades.Schema().HasTable("users") {
		return facades.Schema().Create("users", func(table schema.Blueprint) {
			table.Uuid("id")
			table.String("name", 50)
			table.String("email", 50)
			table.String("password")
			table.DateTime("joined_at").Nullable()
			table.Boolean("is_creator").Default(false)
			table.String("avatar_url").Nullable()
			table.String("username", 50).Nullable()
			table.Boolean("is_verified_email").Default(false)
			//
			table.Index("email")
			table.Index("name")
			table.Primary("id")
			table.Unique("username")
			table.Unique("email")
			table.TimestampsTz()
		})
	}

	return nil
}

// Down Reverse the migrations.
func (r *M20260530110109CreateUsersTable) Down() error {
	return facades.Schema().DropIfExists("users")
}
