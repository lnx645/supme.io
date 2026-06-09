package controllers

import (
	"github.com/goravel/framework/contracts/http"
	"github.com/lnx645/supme.io/app/facades"
	"github.com/lnx645/supme.io/app/models"
)

type CategoryController struct {
	// Dependent services
}

func NewCategoryController() *CategoryController {
	return &CategoryController{
		// Inject services
	}
}

func (r *CategoryController) Index(ctx http.Context) http.Response {

	var category []models.CreatorCategory

	if err := facades.Orm().Query().Model(&models.CreatorCategory{}).Get(&category); err != nil {
		return ctx.Response().Success().Json(http.Json{
			"error": err.Error(),
		})
	}

	return ctx.Response().Success().Json(http.Json{
		"data": category,
	})
}
