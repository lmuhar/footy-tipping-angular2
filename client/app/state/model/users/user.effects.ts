import { UserService } from './../../../../app/services/user.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import * as userActions from './user.actions';
import { switchMap, map } from 'rxjs/operators';

@Injectable()
export class UserEffects {
  @Effect()
  public getUserTotals$: Observable<Action> = this.actions$.pipe(
    ofType(userActions.GET_USER_TOTALS),
    switchMap((action: userActions.GetUserTotals) => {
      return this.userService.getUserTotal().pipe(map(response => new userActions.GetUserTotalsSuccess(response)));
    })
  );

  @Effect()
  public newUserTips$: Observable<Action> = this.actions$.pipe(
    ofType(userActions.NEW_USER_TIPS),
    switchMap((action: userActions.NewUserTips) => {
      return this.userService.newUserTips(action.payload).pipe(map(response => new userActions.NewUserTipsSuccess(response)));
    })
  );

  constructor(private actions$: Actions, private userService: UserService) {}
}
