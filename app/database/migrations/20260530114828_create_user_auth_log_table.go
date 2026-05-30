package migrations

import (
	"github.com/goravel/framework/contracts/database/schema"
	"github.com/lnx645/supme.io/app/facades"
)

type M20260530114828CreateUserAuthLogTable struct{}

// Signature The unique signature for the migration.
func (r *M20260530114828CreateUserAuthLogTable) Signature() string {
	return "20260530114828_create_user_auth_log_table"
}

// Up Run the migrations.
func (r *M20260530114828CreateUserAuthLogTable) Up() error {
	if !facades.Schema().HasTable("user_auth_log") {
		return facades.Schema().Create("user_auth_log", func(table schema.Blueprint) {
			table.ID()
			table.String("event")
			table.ForeignUuid("user_id").
				Constrained("users", "id", "user_relation_to_log").
				CascadeOnDelete().
				CascadeOnUpdate()
			table.String("ip_address").
				Nullable()
			table.Boolean("is_success").
				Default(false)
			table.Text("reason").Nullable()
			table.String("user_agent").
				Nullable()
			table.TimestampsTz()
		})
	}

	return nil
}

// Down Reverse the migrations.
func (r *M20260530114828CreateUserAuthLogTable) Down() error {
	return facades.Schema().DropIfExists("user_auth_log")
}
