import { Tip } from './../../../shared/models/tip.model';
import * as tipActions from './tip.actions';

export interface TipState {
  allTipsForRound: Tip[];
}

const tipInitState: TipState = {
  allTipsForRound: null
};

export function tipReducer(state = tipInitState, action: tipActions.TipAction) {
  switch (action.type) {
    case tipActions.GET_ALL_TIPS_ROUND: {
      return {
        ...state,
        allTipsForRound: null
      };
    }
    case tipActions.GET_ALL_TIPS_ROUND_SUCCESS: {
      return {
        ...state,
        allTipsForRound: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
