import { User } from './../user.model';
import { AuthActions, LOGIN, LOGOUT } from './auth.actions';
export interface AuthState {
  user: User;
}

const initialState: AuthState = {
  user: null,
};

export function authReducer(state = initialState, action: AuthActions) {
  switch (action.type) {
    case LOGIN:
      const user = new User(
        action.payload.email,
        action.payload.userId,
        action.payload.token,
        action.payload.expirationDate
      );
      return {
        ...state,
        user: user,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
}
