import { Action } from '@ngrx/store';
import { Tip, GetUserTips } from './../../../shared/models/tip.model';
import { Round } from './../../../shared/models/round.model';

export const GET_ALL_TIPS_ROUND = 'GET_ALL_TIPS_ROUND';
export const GET_ALL_TIPS_ROUND_SUCCESS = 'GET_ALL_TIPS_ROUND_SUCCESS';
export const UPDATE_TIP_RESULTS = 'UPDATE_TIP_RESULTS';
export const UPDATE_TIP_RESULTS_SUCCESS = 'UPDATE_TIP_RESULTS_SUCCESS';
export const GET_USER_TIPS_ROUND = 'GET_USER_TIPS_ROUND';
export const GET_USER_TIPS_ROUND_SUCCESS = 'GET_USER_TIPS_ROUND_SUCCESS';

export class GetAllTipsForRound implements Action {
  readonly type = GET_ALL_TIPS_ROUND;
  constructor(public payload: string) {}
}

export class GetAllTipsForRoundSuccess implements Action {
  readonly type = GET_ALL_TIPS_ROUND_SUCCESS;
  constructor(public payload: Tip[]) {}
}

export class UpdateTipsWithResults implements Action {
  readonly type = UPDATE_TIP_RESULTS;
  constructor(public payload: Round) {}
}

export class UpdateTipsWithResultsSuccess implements Action {
  readonly type = UPDATE_TIP_RESULTS_SUCCESS;
  constructor(public payload: boolean) {}
}

export class GetUserTipsForRound implements Action {
  readonly type = GET_USER_TIPS_ROUND;
  constructor(public payload: GetUserTips) {}
}

export class GetUserTipsForRoundSuccess implements Action {
  readonly type = GET_USER_TIPS_ROUND_SUCCESS;
  constructor(public payload: Tip) {}
}

export type TipAction =
  | GetAllTipsForRound
  | GetAllTipsForRoundSuccess
  | UpdateTipsWithResults
  | UpdateTipsWithResultsSuccess
  | GetUserTipsForRound
  | GetUserTipsForRoundSuccess;
