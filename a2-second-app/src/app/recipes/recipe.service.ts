import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe 1',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [
        new Ingredient('Meat', 399),
        new Ingredient('French Fries', 89)
      ]
    ),
    new Recipe(
      '2nd test recipe',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [
        new Ingredient('Burger', 99),
        new Ingredient('Pizza', 199)
      ]
    ),
  ];

  getRecipes() {
    // return this.recipes.slice();
    return this.recipes;
  }
}
