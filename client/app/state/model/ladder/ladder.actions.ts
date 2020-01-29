import { Action } from '@ngrx/store';
import { LadderModel } from './../../../core/ladder.model';

export const GET_LADDER = 'GET_LADDER';
export const GET_LADDER_SUCCESS = 'GET_LADDER_SUCCESS';

export class GetLadder implements Action {
  readonly type = GET_LADDER;
  constructor() {}
}

export class GetLadderSuccess implements Action {
  readonly type = GET_LADDER_SUCCESS;
  constructor(public payload: LadderModel[]) {}
}

export type LadderAction = GetLadder | GetLadderSuccess;
