import * as fromShoppingList from '../shopping-list/store/shopping-list.reducer';

export interface AppState {
  shoppingList: fromShoppingList.State;
}
