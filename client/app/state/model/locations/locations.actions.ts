import { Location } from './../../../shared/models/location.model';

import { Action } from '@ngrx/store';

export const GET_LOCATIONS = 'GET_LOCATIONS';
export const GET_LOCATIONS_SUCCESS = 'GET_LOCATIONS_SUCCESS';

export class GetLocations implements Action {
  readonly type = GET_LOCATIONS;
  constructor() {}
}

export class GetLocationsSuccess implements Action {
  readonly type = GET_LOCATIONS_SUCCESS;
  constructor(public payload: Location[]) {}
}

export type LocationAction = GetLocations | GetLocationsSuccess;
