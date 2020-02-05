import { Observable } from 'rxjs';
import { TeamService } from './../../../services/team.service';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import * as teamActions from './team.actions';
import { switchMap, map } from 'rxjs/operators';

@Injectable()
export class TeamEffects {
  @Effect()
  public getTeams$: Observable<Action> = this.actions$.pipe(
    ofType(teamActions.GET_TEAMS),
    switchMap((action: teamActions.GetTeams) => {
      return this.teamService.getTeams().pipe(map(response => new teamActions.GetTeamsSuccess(response)));
    })
  );

  constructor(private actions$: Actions, private teamService: TeamService) {}
}
