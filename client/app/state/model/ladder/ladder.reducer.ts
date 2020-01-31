import { LadderModel } from './../../../core/ladder.model';
import * as ladderActions from './ladder.actions';

export interface LadderState {
  currentLadder: LadderModel[];
  addNewRecord: boolean;
}

const ladderInitState: LadderState = {
  currentLadder: [],
  addNewRecord: null
};

export function ladderReducer(state = ladderInitState, action: ladderActions.LadderAction) {
  switch (action.type) {
    case ladderActions.GET_LADDER: {
      return {
        ...state,
        currentLadder: []
      };
    }
    case ladderActions.GET_LADDER_SUCCESS: {
      return {
        ...state,
        currentLadder: action.payload
      };
    }
    case ladderActions.GET_SCRAPPED_LADDER: {
      return {
        ...state,
        addNewRecord: null
      };
    }
    case ladderActions.ADD_NEW_LADDER_SUCCESS: {
      return {
        ...state,
        addNewRecord: true
      };
    }
    default: {
      return state;
    }
  }
}
