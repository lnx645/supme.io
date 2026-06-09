package models

import (
	"github.com/goravel/framework/database/orm"
)

type Creator struct {
	orm.Timestamps
	ID                  string          `gorm:"primaryKey" json:"id"`
	OverlayKey          *string         `json:"overlay_key" db:"overlay_key"`
	Name                string          `json:"name" db:"name"`
	Username            string          `json:"username" db:"username"`
	PageUrl             *string         `json:"page_url" db:"page_url"`
	ProfilePictureUrl   *string         `json:"profile_picture_url" db:"profile_picture_url"`
	CoverPictureUrl     *string         `json:"cover_picture_url" db:"cover_picture_url"`
	UserId              string          `json:"user_id" db:"user_id"`
	Bio                 *string         `json:"bio" db:"bio"`
	About               *string         `json:"about" db:"about"`
	MustLoginBeforeGift bool            `json:"must_login_before_gift" db:"must_login_before_gift"`
	IsAdultContent      bool            `json:"is_adult_content" db:"is_adult_content"`
	IsVerifiedCreator   bool            `json:"is_verified_creator" db:"is_verified_creator"`
	ShowTopSupporter    bool            `json:"show_top_supporter" db:"show_top_supporter"`
	ShowSupportHistory  bool            `json:"show_support_history" db:"show_support_history"`
	ReciveGifts         bool            `json:"recive_gifts" db:"recive_gifts"`
	GoogleAnalyticsId   *string         `json:"google_analytics_id" db:"google_analytics_id"`
	Active              bool            `json:"active" db:"active"`
	CreatorCategoryId   uint            `json:"creator_category_id" db:"creator_category_id"`
	Category            CreatorCategory `gorm:"foreignKey:CreatorCategoryId;references:ID;" json:"category" `
}

func (r *Creator) TableName() string {
	return "creator"
}
