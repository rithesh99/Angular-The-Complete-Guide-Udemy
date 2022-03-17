import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/store/app.reducer';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import {
  ADD_INGREDIENT,
  DeleteIngredient,
  DELETE_INGREDIENT,
  StopEdit,
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
  editedItem: Ingredient;

  constructor(
    private slService: ShoppingListService,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    // this.subscription = this.slService.startedEditing.subscribe(
    // (itemNumber: number) => {
    this.subscription = this.store
      .select('shoppingList')
      .subscribe((stateData) => {
        if (stateData.editedIngredientIndex > -1) {
          this.editMode = true;
          this.editedItem = stateData.editedIngredient;
          this.formData.form.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount,
          });
        } else {
          this.editMode = false;
        }
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.store.dispatch(new StopEdit());
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
    this.editMode = false;
    this.editedItem = null;
    this.clearForm();
  }

  deleteItem() {
    // this.store.dispatch({
    //   type: DELETE_INGREDIENT,
    //   payload: this.editedItemIndex,
    // });
    this.store.dispatch(new DeleteIngredient());
    // this.slService.deleteIngredient(this.editedItemIndex);
    this.clearForm();
  }
  clearForm() {
    this.formData.form.reset();
    this.store.dispatch(new StopEdit());
  }
}
