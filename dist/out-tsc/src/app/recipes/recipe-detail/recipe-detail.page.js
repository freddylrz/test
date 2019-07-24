import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from '../recipes.service';
var RecipeDetailPage = /** @class */ (function () {
    function RecipeDetailPage(activatedRoute, recipesService) {
        this.activatedRoute = activatedRoute;
        this.recipesService = recipesService;
    }
    RecipeDetailPage.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.paramMap.subscribe(function (paramMap) {
            if (!paramMap.has('recipeId')) {
                // redirect
                return;
            }
            var id = paramMap.get('recipeId');
            _this.lr = _this.recipesService.getRecipe(id);
        });
    };
    RecipeDetailPage = tslib_1.__decorate([
        Component({
            selector: 'app-recipe-detail',
            templateUrl: './recipe-detail.page.html',
            styleUrls: ['./recipe-detail.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute, RecipesService])
    ], RecipeDetailPage);
    return RecipeDetailPage;
}());
export { RecipeDetailPage };
//# sourceMappingURL=recipe-detail.page.js.map