package migrations

type M20260530114803UpdateUserAuthLogTable struct{}

// Signature The unique signature for the migration.
func (r *M20260530114803UpdateUserAuthLogTable) Signature() string {
	return "20260530114803_update_user_auth_log_table"
}

// Up Run the migrations.
func (r *M20260530114803UpdateUserAuthLogTable) Up() error {
	return nil
}

// Down Reverse the migrations.
func (r *M20260530114803UpdateUserAuthLogTable) Down() error {
	return nil
}
