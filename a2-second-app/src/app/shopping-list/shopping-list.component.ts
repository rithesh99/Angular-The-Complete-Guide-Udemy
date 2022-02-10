import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [ShoppingListService]
})
export class ShoppingListComponent implements OnInit {
  selectedIngredient: Ingredient;
  ingredients: Ingredient[];

  constructor(private shoppingListServive: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingListServive.getIngredients();
    this.shoppingListServive.ingredientsChanges
      .subscribe(ingredients => {
        this.ingredients = ingredients;
      })
  }

  deleteIngrediant(data) {
    this.ingredients = this.ingredients.filter((i) => i.name != data);
  }

  onIngredientClick(data: Ingredient) {
    this.selectedIngredient = data;
  }
}
