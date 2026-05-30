package models

import (
	"github.com/goravel/framework/database/orm"
)

type UserAuthLog struct {
	orm.Model
	Event     string  `json:"event" db:"event"`
	UserId    string  `json:"user_id" db:"user_id"`
	IpAddress *string `json:"ip_address" db:"ip_address"`
	IsSuccess bool    `json:"is_success" db:"is_success"`
	Reason    *string `json:"reason" db:"reason"`
	UserAgent *string `json:"user_agent" db:"user_agent"`
}

func (r *UserAuthLog) TableName() string {
	return "user_auth_log"
}
