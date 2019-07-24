import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RecipesPage } from './recipes.page';
var routes = [
    {
        path: '',
        component: RecipesPage
    }
];
var RecipesPageModule = /** @class */ (function () {
    function RecipesPageModule() {
    }
    RecipesPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [RecipesPage]
        })
    ], RecipesPageModule);
    return RecipesPageModule;
}());
export { RecipesPageModule };
//# sourceMappingURL=recipes.module.js.map