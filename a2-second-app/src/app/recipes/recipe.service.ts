import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe(
          'A Test Recipe 1',
          'This is simply a test',
          'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
        ),
        new Recipe(
          '2nd test recipe',
          'This is simply a test',
          'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
        ),
      ];

    getRecipes(){
        // return this.recipes.slice();
        return this.recipes;
    }
};