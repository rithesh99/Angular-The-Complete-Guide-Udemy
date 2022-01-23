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

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  @Output() addRecipeEvent = new EventEmitter<{
    name: string;
    amount: number;
  }>();
  // @Output() addRecipeEvent = new EventEmitter<Ingredient>();
  @Output() deleteRecipeEvent = new EventEmitter<string>();
  @Input() ingredient: Ingredient;
  constructor() {}

  ngOnInit(): void {}
  ngAfterViewChecked() {
    if (this.ingredient && this.ingredient.name && this.ingredient.amount) {
      this.nameInputRef.nativeElement.value = this.ingredient.name;
      this.amountInputRef.nativeElement.value = this.ingredient.amount;
    }
  }
  onAddRecipe(item, amount) {
    if (item.value != '' && amount.value != '') {
      this.addRecipeEvent.emit({
        name: this.nameInputRef.nativeElement.value,
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
