import { Tip } from './../../../shared/models/tip.model';
import { User } from './../../../shared/models/user.model';

import * as userActions from './user.actions';

export interface UserState {
  userTotals: User[];
  newUserTip: Tip;
}

const userInitState: UserState = {
  userTotals: [],
  newUserTip: null
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
    case userActions.NEW_USER_TIPS: {
      return {
        ...state,
        newUserTip: null
      };
    }
    case userActions.NEW_USER_TIPS_SUCCESS: {
      return {
        ...state,
        newUserTip: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
