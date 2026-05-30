package models

import (
	"github.com/goravel/framework/database/orm"
	"github.com/goravel/framework/support/carbon"
)

type User struct {
	orm.Timestamps
	ID                string           `gorm:"primaryKey" json:"id"`
	Name              string           `json:"name" db:"name"`
	Email             string           `json:"email" db:"email"`
	Password          string           `json:"-" db:"password"`
	JoinedAt          *carbon.DateTime `json:"joined_at" db:"joined_at"`
	IsCreator         bool             `json:"is_creator" db:"is_creator"`
	AvatarUrl         *string          `json:"avatar_url" db:"avatar_url"`
	Username          *string          `json:"username" db:"username"`
	IsVerifiedEmail   bool             `json:"is_verified_email" db:"is_verified_email"`
	WhatsappNumber    *string          `json:"whatsapp_number" db:"whatsapp_number"`
	IsVerifiedAccount bool             `json:"is_verified_account" db:"is_verified_account"`
}

func (r *User) TableName() string {
	return "users"
}
