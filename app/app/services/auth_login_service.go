package services

import (
	"time"

	"github.com/goravel/framework/contracts/http"
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

func (c *AuthLoginService) SetAuthCookieWithContext(token string, ctx http.Context) {
	durasiSatuBulan := time.Hour * 24 * 30
	ctx.Response().Cookie(http.Cookie{ // Sesuaikan dengan package http bawaan Go
		Name:     "token_auth__",
		Value:    token,
		HttpOnly: true,
		Expires:  time.Now().Add(durasiSatuBulan),
		Secure:   true,
		SameSite: "lax",
		Path:     "/",
	})
}
