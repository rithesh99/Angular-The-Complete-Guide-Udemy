import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @Output() addRecipeEvent = new EventEmitter<{
    name: string;
    amount: number;
  }>();
  @Output() deleteRecipeEvent = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  onAddRecipe(item, amount) {
    if (item.value != '' && amount.value != '') {
      this.addRecipeEvent.emit({
        name: item.value,
        amount: amount.value,
      });
    } else {
      alert('Enter item and amount');
    }
  }

  onClearRecipe(item, amount) {
    item.value = '';
    amount.value = '';
  }

  onDeleteRecipe(item) {
    if (item.value != '') {
      this.deleteRecipeEvent.emit(item.value);
    } else {
      alert('Enter item to delete');
    }
  }
}
