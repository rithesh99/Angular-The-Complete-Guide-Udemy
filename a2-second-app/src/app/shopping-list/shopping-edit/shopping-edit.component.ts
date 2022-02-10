import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  // @Output() addRecipeEvent = new EventEmitter<Ingredient>();
  @Output() deleteRecipeEvent = new EventEmitter<string>();
  @Input() ingredient: Ingredient;
  constructor(private shoppingListServive: ShoppingListService) {}

  ngOnInit(): void {}
  ngAfterViewChecked() {
    if (this.ingredient && this.ingredient.name && this.ingredient.amount) {
      this.nameInputRef.nativeElement.value = this.ingredient.name;
      this.amountInputRef.nativeElement.value = this.ingredient.amount;
    }
  }
  onAddRecipe(item, amount) {
    if (item.value != '' && amount.value != '') {
      const newIngredient = {
        name: this.nameInputRef.nativeElement.value,
        amount: amount.value,
      };
      this.shoppingListServive.addIngrediant(newIngredient);
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
