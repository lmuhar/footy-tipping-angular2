import { Tip } from './../../../shared/models/tip.model';
import * as tipActions from './tip.actions';

export interface TipState {
  allTipsForRound: Tip[];
  updateTipResults: boolean;
}

const tipInitState: TipState = {
  allTipsForRound: null,
  updateTipResults: null
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
    case tipActions.UPDATE_TIP_RESULTS: {
      return {
        ...state,
        updateTipResults: null
      };
    }
    case tipActions.UPDATE_TIP_RESULTS_SUCCESS: {
      return {
        ...state,
        updateTipResults: true
      };
    }
    default: {
      return state;
    }
  }
}
