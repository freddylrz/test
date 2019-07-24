import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RecipeDetailPage } from './recipe-detail.page';
var routes = [
    {
        path: '',
        component: RecipeDetailPage
    }
];
var RecipeDetailPageModule = /** @class */ (function () {
    function RecipeDetailPageModule() {
    }
    RecipeDetailPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [RecipeDetailPage]
        })
    ], RecipeDetailPageModule);
    return RecipeDetailPageModule;
}());
export { RecipeDetailPageModule };
//# sourceMappingURL=recipe-detail.module.js.map