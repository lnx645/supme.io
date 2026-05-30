package services

import (
	"github.com/lnx645/supme.io/app/facades"
	"github.com/lnx645/supme.io/app/models"
)

type AuthLoginService struct{}

func NewLoginService() *AuthLoginService {
	return &AuthLoginService{}
}

func (c *AuthLoginService) Record(event string, ipAddress string, userAgent string, userId string, isSuccess bool, reason string) {
	logData := models.UserAuthLog{
		Event:     event,
		IpAddress: &ipAddress,
		UserId:    userId,
		IsSuccess: isSuccess,
		Reason:    &reason,
		UserAgent: &userAgent,
	}

	_ = facades.Orm().Query().Create(&logData)
}

func (c *AuthLoginService) CreateAuth() map[string]any {
	return nil
}
