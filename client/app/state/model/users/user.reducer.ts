import { User } from './../../../shared/models/user.model';

import * as userActions from './user.actions';

export interface UserState {
  userTotals: User[];
}

const userInitState: UserState = {
  userTotals: []
};

export function userReducer(state = userInitState, action: userActions.UserAction) {
  switch (action.type) {
    case userActions.GET_USER_TOTALS: {
      return {
        ...state,
        userTotals: []
      };
    }
    case userActions.GET_USER_TOTALS_SUCCESS: {
      return {
        ...state,
        userTotals: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
