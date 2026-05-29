package requests

import (
	"github.com/goravel/framework/contracts/http"
	"github.com/goravel/framework/contracts/validation"
)

type LoginPostRequest struct {
	Name string `form:"name" json:"name"`
}

func (r *LoginPostRequest) Authorize(ctx http.Context) error {
	return nil
}

func (r *LoginPostRequest) Filters(ctx http.Context) map[string]string {
	return map[string]string{}
}

func (r *LoginPostRequest) Rules(ctx http.Context) map[string]string {
	return map[string]string{
		"email":    "required|email",
		"password": "required",
	}
}

func (r *LoginPostRequest) Messages(ctx http.Context) map[string]string {
	return map[string]string{}
}

func (r *LoginPostRequest) Attributes(ctx http.Context) map[string]string {
	return map[string]string{}
}

func (r *LoginPostRequest) PrepareForValidation(ctx http.Context, data validation.Data) error {
	return nil
}
