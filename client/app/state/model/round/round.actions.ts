import { Round } from './../../../shared/models/round.model';
import { Action } from '@ngrx/store';

export const ROUND_WITH_ID_NUMBER = 'ROUND_WITH_ID_NUMBER';
export const ROUND_WITH_ID_NUMBER_SUCCESS = 'ROUND_WITH_ID_NUMBER_SUCCESS';
export const GET_ROUND = 'GET_ROUND';
export const GET_ROUND_SUCCESS = 'GET_ROUND_SUCCESS';
export const EDIT_ROUND = 'EDIT_ROUND';
export const EDIT_ROUND_SUCCESS = 'EDIT_ROUND_SUCCESS';

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

export class EditRound implements Action {
  readonly type = EDIT_ROUND;
  constructor(public payload: Round) {}
}

export class EditRoundSuccess implements Action {
  readonly type = EDIT_ROUND_SUCCESS;
  constructor(public payload: boolean) {}
}

export type RoundAction = GetRoundWithIdNumber | GetRoundWithIdNumberSuccess | GetRound | GetRoundSuccess | EditRound | EditRoundSuccess;
