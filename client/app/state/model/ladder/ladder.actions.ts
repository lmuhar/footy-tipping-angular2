import { Action } from '@ngrx/store';
import { LadderModel } from './../../../core/ladder.model';

export const GET_LADDER = 'GET_LADDER';
export const GET_LADDER_SUCCESS = 'GET_LADDER_SUCCESS';
export const GET_SCRAPPED_LADDER = 'GET_SCRAPPED_LADDER';
export const GET_SCRAPPED_LADDER_SUCCESS = 'GET_SCRAPPED_LADDER_SUCCESS';
export const ADD_NEW_LADDER = 'ADD_NEW_LADDER';
export const ADD_NEW_LADDER_SUCCESS = 'ADD_NEW_LADDER_SUCCESS';

export class GetLadder implements Action {
  readonly type = GET_LADDER;
  constructor() {}
}

export class GetLadderSuccess implements Action {
  readonly type = GET_LADDER_SUCCESS;
  constructor(public payload: LadderModel[]) {}
}

export class GetScrappedLadder implements Action {
  readonly type = GET_SCRAPPED_LADDER;
  constructor() {}
}

export class AddNewRecordSuccess implements Action {
  readonly type = ADD_NEW_LADDER_SUCCESS;
  constructor(public payload: boolean) {}
}

export type LadderAction = GetLadder | GetLadderSuccess | GetScrappedLadder | AddNewRecordSuccess;
