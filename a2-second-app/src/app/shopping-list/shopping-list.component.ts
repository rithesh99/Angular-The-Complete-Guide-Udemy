import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  selectedIngredient: Ingredient;
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  constructor() {}

  ngOnInit(): void {}

  addIngrediant(data) {
    console.log(data);
    this.ingredients.push(data);
  }

  deleteIngrediant(data) {
    this.ingredients = this.ingredients.filter((i) => i.name != data);
  }

  onIngredientClick(data: Ingredient) {
    this.selectedIngredient = data;
  }
}
