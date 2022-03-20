import { ActionReducerMap } from '@ngrx/store';
import { authReducer, AuthState } from '../auth/store/auth.reducer';
import {
  shoppingListReducer,
  ShoppingState,
} from '../shopping-list/store/shopping-list.reducer';
import * as fromRecipes from '../recipes/store/recipe.reducer';

export interface AppState {
  shoppingList: ShoppingState;
  auth: AuthState;
  recipes: fromRecipes.RecipeState;
}

export const appReducer: ActionReducerMap<AppState> = {
  shoppingList: shoppingListReducer,
  auth: authReducer,
  recipes: fromRecipes.recipeReducer,
};
