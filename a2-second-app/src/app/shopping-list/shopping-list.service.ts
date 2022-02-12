import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  ingredientsChanges = new EventEmitter<Ingredient[]>();
  selectedIngredient: Ingredient;

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients(){
      return this.ingredients.slice();
  }
  addIngrediant(data) {
    this.ingredients.push(data);
    this.ingredientsChanges.emit(this.ingredients.slice())
  }

  deleteIngrediant(data) {
    this.ingredients = this.ingredients.filter((i) => i.name != data);
  }

  onIngredientClick(data: Ingredient) {
    this.selectedIngredient = data;
  }

  addIngrediants(ingredients: Ingredient[]) {
    // for (let ingredient of ingredients) {
    //   this.addIngrediant(ingredient);
    // }
    this.ingredients.push(...ingredients);
    this.ingredientsChanges.emit(this.ingredients.slice())
  }

}
