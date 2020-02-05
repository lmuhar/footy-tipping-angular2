import { Observable } from 'rxjs';
import { LocationService } from './../../../services/location.service';

import * as locationActions from './locations.actions';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { switchMap, map } from 'rxjs/operators';

@Injectable()
export class LocationEffects {
  @Effect()
  public getLocations$: Observable<Action> = this.actions$.pipe(
    ofType(locationActions.GET_LOCATIONS),
    switchMap((action: locationActions.GetLocations) => {
      return this.locationService.getLocations().pipe(map(response => new locationActions.GetLocationsSuccess(response)));
    })
  );

  constructor(private actions$: Actions, private locationService: LocationService) {}
}
