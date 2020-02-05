import { Round } from './../../../shared/models/round.model';
import { Action } from '@ngrx/store';

export const ROUND_WITH_ID_NUMBER = 'ROUND_WITH_ID_NUMBER';
export const ROUND_WITH_ID_NUMBER_SUCCESS = 'ROUND_WITH_ID_NUMBER_SUCCESS';
export const GET_ROUND = 'GET_ROUND';
export const GET_ROUND_SUCCESS = 'GET_ROUND_SUCCESS';
export const EDIT_ROUND = 'EDIT_ROUND';
export const EDIT_ROUND_SUCCESS = 'EDIT_ROUND_SUCCESS';
export const GET_ALL_ROUNDS = 'GET_ALL_ROUNDS';
export const GET_ALL_ROUNDS_SUCCESS = 'GET_ALL_ROUNDS_SUCCESS';
export const DELETE_ROUND = 'DELETE_ROUND';
export const DELETE_ROUND_SUCCESS = 'DELETE_ROUND_SUCCESS';
export const ADD_ROUND = 'ADD_ROUND';
export const ADD_ROUND_SUCCESS = 'ADD_ROUND_SUCCESS';
export const GET_ROUND_TOTAL = 'GET_ROUND_TOTAL';
export const GET_ROUND_TOTAL_SUCCESS = 'GET_ROUND_TOTAL_SUCCESS';

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

export class GetAllRounds implements Action {
  readonly type = GET_ALL_ROUNDS;
  constructor() {}
}

export class GetAllRoundsSuccess implements Action {
  readonly type = GET_ALL_ROUNDS_SUCCESS;
  constructor(public payload: Round[]) {}
}

export class DeleteRound implements Action {
  readonly type = DELETE_ROUND;
  constructor(public payload: Round) {}
}

export class DeleteRoundSuccess implements Action {
  readonly type = DELETE_ROUND_SUCCESS;
  constructor(public payload: boolean) {}
}

export class AddRound implements Action {
  readonly type = ADD_ROUND;
  constructor(public payload: Round) {}
}

export class AddRoundSuccess implements Action {
  readonly type = ADD_ROUND_SUCCESS;
  constructor(public payload: boolean) {}
}

export class GetRoundTotal implements Action {
  readonly type = GET_ROUND_TOTAL;
  constructor() {}
}

export class GetRoundTotalSuccess implements Action {
  readonly type = GET_ROUND_TOTAL_SUCCESS;
  constructor(public payload: Round[]) {}
}

export type RoundAction =
  | GetRoundWithIdNumber
  | GetRoundWithIdNumberSuccess
  | GetRound
  | GetRoundSuccess
  | EditRound
  | EditRoundSuccess
  | GetAllRounds
  | GetAllRoundsSuccess
  | DeleteRound
  | DeleteRoundSuccess
  | AddRound
  | AddRoundSuccess
  | GetRoundTotal
  | GetRoundTotalSuccess;
