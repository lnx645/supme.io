package migrations

import (
	"github.com/goravel/framework/contracts/database/schema"
	"github.com/lnx645/supme.io/app/facades"
)

type M20260607132554CreateCreatorCategoryTable struct{}

// Signature The unique signature for the migration.
func (r *M20260607132554CreateCreatorCategoryTable) Signature() string {
	return "20260607132554_create_creator_category_table"
}

// Up Run the migrations.
func (r *M20260607132554CreateCreatorCategoryTable) Up() error {
	if !facades.Schema().HasTable("creator_category") {
		return facades.Schema().Create("creator_category", func(table schema.Blueprint) {
			table.ID()
			table.String("name")
			table.String("slug")
			table.TimestampsTz()
		})
	}

	return nil
}

// Down Reverse the migrations.
func (r *M20260607132554CreateCreatorCategoryTable) Down() error {
	return facades.Schema().DropIfExists("creator_category")
}
