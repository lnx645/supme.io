package migrations

import (
	"github.com/goravel/framework/contracts/database/schema"
	"github.com/lnx645/supme.io/app/facades"
)

type M20260607131145CreateCreatorTable struct{}

// Signature The unique signature for the migration.
func (r *M20260607131145CreateCreatorTable) Signature() string {
	return "20260607131145_create_creator_table"
}

// Up Run the migrations.
func (r *M20260607131145CreateCreatorTable) Up() error {
	if !facades.Schema().HasTable("creator") {
		return facades.Schema().Create("creator", func(table schema.Blueprint) {
			table.Uuid("id")
			table.String("name")
			table.String("username")
			table.String("page_url").Nullable()
			table.String("profile_picture_url").Nullable()
			table.String("cover_picture_url").Nullable()
			table.ForeignUuid("user_id").Constrained("users", "id", "user_id_creator").CascadeOnUpdate().CascadeOnDelete()
			table.Text("bio").Nullable()
			table.Text("about").Nullable()
			table.Boolean("must_login_before_gift").Default(false)
			table.Boolean("is_adult_content").Default(false)
			table.Boolean("is_verified_creator").Default(false)
			table.Boolean("show_top_supporter").Default(true)
			table.Boolean("show_support_history").Default(false)
			table.Boolean("recive_gifts").Default(true)
			table.String("google_analytics_id").Nullable()
			table.Boolean("active").Default(false)
			table.Unique("user_id")
			table.Primary("id")
			table.TimestampsTz()
		})
	}

	return nil
}

// Down Reverse the migrations.
func (r *M20260607131145CreateCreatorTable) Down() error {
	return facades.Schema().DropIfExists("creator")
}
