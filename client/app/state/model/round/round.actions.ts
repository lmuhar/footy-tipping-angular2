import { Round } from './../../../shared/models/round.model';
import { Action } from '@ngrx/store';

export const ROUND_WITH_ID_NUMBER = 'ROUND_WITH_ID_NUMBER';
export const ROUND_WITH_ID_NUMBER_SUCCESS = 'ROUND_WITH_ID_NUMBER_SUCCESS';
export const GET_ROUND = 'GET_ROUND';
export const GET_ROUND_SUCCESS = 'GET_ROUND_SUCCESS';

export class GetRoundWithIdNumber implements Action {
  readonly type = ROUND_WITH_ID_NUMBER;
  constructor() {}
}

export class GetRoundWithIdNumberSuccess implements Action {
  readonly type = ROUND_WITH_ID_NUMBER_SUCCESS;
  constructor(public payload: Round[]) {}
}

export class GetRound implements Action {
  readonly type = GET_ROUND;
  constructor(public payload: string) {}
}

export class GetRoundSuccess implements Action {
  readonly type = GET_ROUND_SUCCESS;
  constructor(public payload: Round) {}
}

export type RoundAction = GetRoundWithIdNumber | GetRoundWithIdNumberSuccess | GetRound | GetRoundSuccess;
