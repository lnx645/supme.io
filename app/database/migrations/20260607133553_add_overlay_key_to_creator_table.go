package migrations

import (
	"github.com/goravel/framework/contracts/database/schema"
	"github.com/lnx645/supme.io/app/facades"
)

type M20260607133553AddOverlayKeyToCreatorTable struct{}

// Signature The unique signature for the migration.
func (r *M20260607133553AddOverlayKeyToCreatorTable) Signature() string {
	return "20260607133553_add_overlay_key_to_creator_table"
}

// Up Run the migrations.
func (r *M20260607133553AddOverlayKeyToCreatorTable) Up() error {
	return facades.Schema().Table("creator", func(table schema.Blueprint) {
		table.String("overlay_key").After("id").Nullable()
	})
}

// Down Reverse the migrations.
func (r *M20260607133553AddOverlayKeyToCreatorTable) Down() error {
	return nil
}
