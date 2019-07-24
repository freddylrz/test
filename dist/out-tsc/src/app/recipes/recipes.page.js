import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { RecipesService } from './recipes.service';
var RecipesPage = /** @class */ (function () {
    function RecipesPage(recipesService) {
        this.recipesService = recipesService;
    }
    RecipesPage.prototype.ngOnInit = function () {
        this.recipes = this.recipesService.getAllRecipes();
    };
    RecipesPage = tslib_1.__decorate([
        Component({
            selector: 'app-recipes',
            templateUrl: './recipes.page.html',
            styleUrls: ['./recipes.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [RecipesService])
    ], RecipesPage);
    return RecipesPage;
}());
export { RecipesPage };
//# sourceMappingURL=recipes.page.js.map