import { Observable } from 'rxjs';
import { AflLadderService } from './../../../services/afl-ladder.service';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import * as ladderActions from './ladder.actions';
import { switchMap, map } from 'rxjs/operators';

@Injectable()
export class LadderEffects {
  @Effect()
  public getLadder$: Observable<Action> = this.actions$.pipe(
    ofType(ladderActions.GET_LADDER),
    switchMap((action: ladderActions.GetLadder) => {
      return this.ladderService.getLatestLadder().pipe(map(response => new ladderActions.GetLadderSuccess(response)));
    })
  );

  constructor(private actions$: Actions, private ladderService: AflLadderService) {}
}
