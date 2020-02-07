import { TipsSavedEmail } from './../../../shared/models/email.model';
import { Action } from '@ngrx/store';

export const SEND_TIPS_SAVED_EMAIL = 'SEND_TIPS_SAVED_EMAIL';
export const SEND_TIPS_SAVED_EMAIL_SUCCESS = 'SEND_TIPS_SAVED_EMAIL_SUCCESS';

export class SendTipsSavedEmail implements Action {
  readonly type = SEND_TIPS_SAVED_EMAIL;
  constructor(public payload: TipsSavedEmail) {}
}

export class SendTipsSavedEmailSuccess implements Action {
  readonly type = SEND_TIPS_SAVED_EMAIL_SUCCESS;
  constructor(public payload: boolean) {}
}

export type SendEmailAction = SendTipsSavedEmail | SendTipsSavedEmailSuccess;
