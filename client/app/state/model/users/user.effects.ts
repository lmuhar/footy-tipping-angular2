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

  @Effect()
  public getAllUsers$: Observable<Action> = this.actions$.pipe(
    ofType(userActions.GET_ALL_USERS),
    switchMap((action: userActions.GetAllUsers) => {
      return this.userService.getUsers().pipe(map(response => new userActions.GetAllUsersSuccess(response)));
    })
  );

  @Effect()
  public deleteUser$: Observable<Action> = this.actions$.pipe(
    ofType(userActions.DELETE_USER),
    switchMap((action: userActions.DeleteUser) => {
      return this.userService.deleteUser(action.payload).pipe(map(response => new userActions.DeleteUserSuccess(true)));
    })
  );

  @Effect()
  public getUserData$: Observable<Action> = this.actions$.pipe(
    ofType(userActions.GET_USER_DATA),
    switchMap((action: userActions.GetUserData) => {
      return this.userService.getUser(action.payload).pipe(map(response => new userActions.GetUserDataSuccess(response)));
    })
  );

  constructor(private actions$: Actions, private userService: UserService) {}
}
