import * as emailActions from './email.actions';

export interface EmailState {
  sendTipSavedEmail: boolean;
}

const emailInitState: EmailState = {
  sendTipSavedEmail: null
};

export function emailReducer(state = emailInitState, action: emailActions.SendEmailAction) {
  switch (action.type) {
    case emailActions.SEND_TIPS_SAVED_EMAIL: {
      return {
        ...state,
        sendTipsSavedEmail: null
      };
    }
    case emailActions.SEND_TIPS_SAVED_EMAIL_SUCCESS: {
      return {
        ...state,
        sendTipsSavedEmail: true
      };
    }
    default: {
      return state;
    }
  }
}
