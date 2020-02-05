import { Action } from '@ngrx/store';
import { User } from './../../../shared/models/user.model';

export const GET_USER_TOTALS = 'GET_USER_TOTALS';
export const GET_USER_TOTALS_SUCCESS = 'GET_USER_TOTALS_SUCCESS';

export class GetUserTotals implements Action {
  readonly type = GET_USER_TOTALS;
  constructor() {}
}

export class GetUserTotalsSuccess implements Action {
  readonly type = GET_USER_TOTALS_SUCCESS;
  constructor(public payload: User[]) {}
}

export type UserAction = GetUserTotals | GetUserTotalsSuccess;
