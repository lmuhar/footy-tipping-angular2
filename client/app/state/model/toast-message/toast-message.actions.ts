import { Action } from '@ngrx/store';
import { ToastMessageModel } from './../../../shared/models/toast-message.model';

export const TOAST_MESSAGE = 'TOAST_MESSAGE';
export const TOAST_MESSAGE_CLEAR = 'TOAST_MESSAGE_CLEAR';

export class ToastMessage implements Action {
  readonly type = TOAST_MESSAGE;
  constructor(public payload: ToastMessageModel) {}
}

export class ToastMessageReset implements Action {
  readonly type = TOAST_MESSAGE_CLEAR;
  constructor() {}
}

export type ToastAction = ToastMessage | ToastMessageReset;
