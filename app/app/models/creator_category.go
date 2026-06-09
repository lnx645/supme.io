package models

import (
	"github.com/goravel/framework/database/orm"
)

type CreatorCategory struct {
	orm.Model
	Name string `json:"name" db:"name"`
	Slug string `json:"slug" db:"slug"`
}

func (r *CreatorCategory) TableName() string {
	return "creator_category"
}
