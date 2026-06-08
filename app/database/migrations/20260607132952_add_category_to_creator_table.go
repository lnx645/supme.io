package migrations

import (
	"github.com/goravel/framework/contracts/database/schema"
	"github.com/lnx645/supme.io/app/facades"
)

type M20260607132952AddCategoryToCreatorTable struct{}

// Signature The unique signature for the migration.
func (r *M20260607132952AddCategoryToCreatorTable) Signature() string {
	return "20260607132952_add_category_to_creator_table"
}

// Up Run the migrations.
func (r *M20260607132952AddCategoryToCreatorTable) Up() error {
	return facades.Schema().Table("creator", func(table schema.Blueprint) {
		table.ForeignID("creator_category_id").Constrained("creator_category", "id", "index_creator_id").CascadeOnUpdate().NoActionOnDelete()
	})
}

// Down Reverse the migrations.
func (r *M20260607132952AddCategoryToCreatorTable) Down() error {
	return nil
}
