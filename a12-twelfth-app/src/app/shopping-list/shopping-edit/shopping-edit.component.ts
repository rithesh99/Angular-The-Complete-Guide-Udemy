import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import {
  ADD_INGREDIENT,
  DeleteIngredient,
  DELETE_INGREDIENT,
  UpdateIngredient,
} from '../store/shopping-list.actions';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  // @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  // @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;
  @ViewChild('f') formData: NgForm;
  subscription: Subscription;
  editMode: boolean = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(
    private slService: ShoppingListService,
    private store: Store<any>
  ) {}

  ngOnInit() {
    this.subscription = this.slService.startedEditing.subscribe(
      (itemNumber: number) => {
        this.editedItemIndex = itemNumber;
        this.editMode = true;
        this.editedItem = this.slService.getIngredient(itemNumber);

        this.formData.form.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        });
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onAddItem(formData: NgForm) {
    // const ingName = this.nameInputRef.nativeElement.value;
    // const ingAmount = this.amountInputRef.nativeElement.value;
    console.log(formData.value);
    const newIngredient = new Ingredient(
      formData.value.name,
      formData.value.amount
    );
    if (this.editMode) {
      this.store.dispatch(
        new UpdateIngredient({
          index: this.editedItemIndex,
          ingredient: newIngredient,
        })
      );
      // this.slService.updateIngredient(this.editedItemIndex, newIngredient);
    } else {
      this.store.dispatch({
        type: ADD_INGREDIENT,
        payload: newIngredient,
      });
      // this.slService.addIngredient(newIngredient);
    }
    this.editedItemIndex = null;
    this.editMode = false;
    this.editedItem = null;
    this.clearForm();
  }

  deleteItem() {
    // this.store.dispatch({
    //   type: DELETE_INGREDIENT,
    //   payload: this.editedItemIndex,
    // });
    this.store.dispatch(new DeleteIngredient(this.editedItemIndex));
    // this.slService.deleteIngredient(this.editedItemIndex);
    this.clearForm();
  }
  clearForm() {
    this.formData.form.reset();
  }
}
