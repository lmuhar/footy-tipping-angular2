import { switchMap, map } from 'rxjs/operators';
import { TipService } from './../../../services/tip.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';

import * as tipActions from './tip.actions';
import { Action } from '@ngrx/store';

@Injectable()
export class TipEffects {
  @Effect()
  public getAllTipsForRound$: Observable<Action> = this.actions$.pipe(
    ofType(tipActions.GET_ALL_TIPS_ROUND),
    switchMap((action: tipActions.GetAllTipsForRound) => {
      return this.tipService.allTipsForRound(action.payload).pipe(map(response => new tipActions.GetAllTipsForRoundSuccess(response)));
    })
  );

  @Effect()
  public updateTipResults$: Observable<Action> = this.actions$.pipe(
    ofType(tipActions.UPDATE_TIP_RESULTS),
    switchMap((action: tipActions.UpdateTipsWithResults) => {
      return this.tipService.updateTipsWithResults(action.payload).pipe(map(response => new tipActions.UpdateTipsWithResultsSuccess(true)));
    })
  );

  constructor(private actions$: Actions, private tipService: TipService) {}
}
