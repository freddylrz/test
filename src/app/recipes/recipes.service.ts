import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = 
  [
    {
      id: '1',
      title: 'SHION ARIES',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbvU1DIU8VYanrM2n2CIG2-K3CRWxzUoYVXWdgjdTJbsbVHfmo',
      ingredients: ['a', 'b', 'c']
    },
    {
      id: '2',
      title: 'DEATHMASK CANCER',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbVGbxI3MkMSy_c_mAYCszrOM__bEiEuX2bs2Z1qWS0DFIcDuMFw',
      ingredients: ['a2', 'b2', 'c2']
    }
  ];

  constructor() { }

  getAllRecipes()
  {
    return [...this.recipes];
  }

  getRecipe(recipeId: string)
  {
    return {
      ...this.recipes.find(recipe => {
      return recipe.id === recipeId;
      })
    };
  }

  deleteRecipes(recipeId: string)
  {
    this.recipes = this.recipes.filter(recipe => 
    {
      return recipe.id !== recipeId;
    });
  }
}
