import { Team } from './../../../shared/models/team.model';
import { Action } from '@ngrx/store';

export const GET_TEAMS = 'GET_TEAMS';
export const GET_TEAMS_SUCCESS = 'GET_TEAMS_SUCCESS';

export class GetTeams implements Action {
  readonly type = GET_TEAMS;
  constructor() {}
}

export class GetTeamsSuccess implements Action {
  readonly type = GET_TEAMS_SUCCESS;
  constructor(public payload: Team[]) {}
}

export type TeamAction = GetTeams | GetTeamsSuccess;
