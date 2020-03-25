import { ToastMessageModel } from './../../../shared/models/toast-message.model';
import * as toastMessageAction from './toast-message.actions';

export interface ToastMessageState {
  toastMessage: ToastMessageModel;
}

const toastMessageInitState: ToastMessageState = {
  toastMessage: null
};

export function toastMessageReducer(state = toastMessageInitState, action: toastMessageAction.ToastAction) {
  switch (action.type) {
    case toastMessageAction.TOAST_MESSAGE: {
      return {
        ...state,
        toastMessage: action.payload
      };
    }
    case toastMessageAction.TOAST_MESSAGE_CLEAR: {
      return {
        ...state,
        toastMessage: null
      };
    }
    default: {
      return state;
    }
  }
}
