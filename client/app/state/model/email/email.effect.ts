import { EmailService } from './../../../services/email.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import * as emailActions from './email.actions';
import { switchMap, map } from 'rxjs/operators';

@Injectable()
export class EmailEffects {
  @Effect()
  public sendSavedEmailTips$: Observable<Action> = this.actions$.pipe(
    ofType(emailActions.SEND_TIPS_SAVED_EMAIL),
    switchMap((action: emailActions.SendTipsSavedEmail) => {
      return this.emailService.enteredTipsEmail(action.payload).pipe(map(response => new emailActions.SendTipsSavedEmailSuccess(true)));
    })
  );

  constructor(private actions$: Actions, private emailService: EmailService) {}
}
