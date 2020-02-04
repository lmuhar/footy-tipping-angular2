import { Action } from '@ngrx/store';
import { Tip } from './../../../shared/models/tip.model';

export const GET_ALL_TIPS_ROUND = 'GET_ALL_TIPS_ROUND';
export const GET_ALL_TIPS_ROUND_SUCCESS = 'GET_ALL_TIPS_ROUND_SUCCESS';

export class GetAllTipsForRound implements Action {
  readonly type = GET_ALL_TIPS_ROUND;
  constructor(public payload: string) {}
}

export class GetAllTipsForRoundSuccess implements Action {
  readonly type = GET_ALL_TIPS_ROUND_SUCCESS;
  constructor(public payload: Tip[]) {}
}

export type TipAction = GetAllTipsForRound | GetAllTipsForRoundSuccess;
