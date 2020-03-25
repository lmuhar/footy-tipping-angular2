import { Tip } from './../../../shared/models/tip.model';
import * as tipActions from './tip.actions';

export interface TipState {
  allTipsForRound: Tip[];
  updateTipResults: boolean;
  userTips: Tip;
  editTips: boolean;
}

const tipInitState: TipState = {
  allTipsForRound: [],
  updateTipResults: null,
  userTips: null,
  editTips: null
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
    case tipActions.GET_USER_TIPS_ROUND: {
      return {
        ...state,
        userTips: []
      };
    }
    case tipActions.GET_USER_TIPS_ROUND_SUCCESS: {
      return {
        ...state,
        userTips: action.payload
      };
    }
    case tipActions.EDIT_TIPS: {
      return {
        ...state,
        editTips: null
      };
    }
    case tipActions.EDIT_TIPS_SUCCESS: {
      return {
        ...state,
        editTips: true
      };
    }
    default: {
      return state;
    }
  }
}
