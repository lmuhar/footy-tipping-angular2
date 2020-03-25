import { Action } from '@ngrx/store';
import { User } from './../../../shared/models/user.model';
import { Tip } from './../../../shared/models/tip.model';

export const GET_USER_TOTALS = 'GET_USER_TOTALS';
export const GET_USER_TOTALS_SUCCESS = 'GET_USER_TOTALS_SUCCESS';
export const NEW_USER_TIPS = 'NEW_USER_TIPS';
export const NEW_USER_TIPS_SUCCESS = 'NEW_USER_TIPS_SUCCESS';
export const GET_ALL_USERS = 'GET_ALL_USERS';
export const GET_ALL_USERS_SUCCESS = 'GET_ALL_USERS_SUCCESS';
export const DELETE_USER = 'DELETE_USER';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export const GET_USER_DATA = 'GET_USER_DATA';
export const GET_USER_DATA_SUCCESS = 'GET_USER_DATA_SUCCESS';

export class GetUserTotals implements Action {
  readonly type = GET_USER_TOTALS;
  constructor() {}
}

export class GetUserTotalsSuccess implements Action {
  readonly type = GET_USER_TOTALS_SUCCESS;
  constructor(public payload: User[]) {}
}

export class NewUserTips implements Action {
  readonly type = NEW_USER_TIPS;
  constructor(public payload: Tip) {}
}

export class NewUserTipsSuccess implements Action {
  readonly type = NEW_USER_TIPS_SUCCESS;
  constructor(public payload: Tip) {}
}

export class GetAllUsers implements Action {
  readonly type = GET_ALL_USERS;
  constructor() {}
}

export class GetAllUsersSuccess implements Action {
  readonly type = GET_ALL_USERS_SUCCESS;
  constructor(public payload: User[]) {}
}

export class DeleteUser implements Action {
  readonly type = DELETE_USER;
  constructor(public payload: User) {}
}

export class DeleteUserSuccess implements Action {
  readonly type = DELETE_USER_SUCCESS;
  constructor(public payload: boolean) {}
}

export class GetUserData implements Action {
  readonly type = GET_USER_DATA;
  constructor(public payload: string) {}
}

export class GetUserDataSuccess implements Action {
  readonly type = GET_USER_DATA_SUCCESS;
  constructor(public payload: User) {}
}

export type UserAction =
  | GetUserTotals
  | GetUserTotalsSuccess
  | NewUserTips
  | NewUserTipsSuccess
  | GetAllUsers
  | GetAllUsersSuccess
  | DeleteUser
  | DeleteUserSuccess
  | GetUserData
  | GetUserDataSuccess;
