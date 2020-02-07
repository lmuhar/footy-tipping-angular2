import { Tip } from './../../../shared/models/tip.model';
import { User } from './../../../shared/models/user.model';

import * as userActions from './user.actions';

export interface UserState {
  userTotals: User[];
  newUserTip: Tip;
  allUsers: User[];
  deleteUserResponse: boolean;
  userData: User;
}

const userInitState: UserState = {
  userTotals: [],
  newUserTip: null,
  allUsers: [],
  deleteUserResponse: null,
  userData: null
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
    case userActions.GET_ALL_USERS: {
      return {
        ...state,
        allUsers: []
      };
    }
    case userActions.GET_ALL_USERS_SUCCESS: {
      return {
        ...state,
        allUsers: action.payload
      };
    }
    case userActions.DELETE_USER: {
      return {
        ...state,
        deleteUserResponse: null
      };
    }
    case userActions.DELETE_USER_SUCCESS: {
      return {
        ...state,
        deleteUserResponse: true
      };
    }
    case userActions.GET_USER_DATA: {
      return {
        ...state,
        userData: null
      };
    }
    case userActions.GET_USER_DATA_SUCCESS: {
      return {
        ...state,
        userData: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
