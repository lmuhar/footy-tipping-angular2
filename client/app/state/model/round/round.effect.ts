import { switchMap, map } from 'rxjs/operators';
import { RoundService } from './../../../services/round.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import * as roundActions from './round.actions';

@Injectable()
export class RoundEffects {
  @Effect()
  public getRoundIdNumber$: Observable<Action> = this.actions$.pipe(
    ofType(roundActions.ROUND_WITH_ID_NUMBER),
    switchMap((action: roundActions.GetRoundWithIdNumber) => {
      return this.roundService.getRoundWithIdNumber().pipe(map(response => new roundActions.GetRoundWithIdNumberSuccess(response)));
    })
  );

  @Effect()
  public getRound$: Observable<Action> = this.actions$.pipe(
    ofType(roundActions.GET_ROUND),
    switchMap((action: roundActions.GetRound) => {
      return this.roundService.getRound(action.payload).pipe(map(response => new roundActions.GetRoundSuccess(response)));
    })
  );

  @Effect()
  public editRound$: Observable<Action> = this.actions$.pipe(
    ofType(roundActions.EDIT_ROUND),
    switchMap((action: roundActions.EditRound) => {
      return this.roundService.editRound(action.payload).pipe(map(response => new roundActions.EditRoundSuccess(true)));
    })
  );

  constructor(private actions$: Actions, private roundService: RoundService) {}
}
