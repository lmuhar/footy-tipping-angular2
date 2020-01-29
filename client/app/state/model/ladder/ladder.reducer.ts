import { LadderModel } from './../../../core/ladder.model';
import * as ladderActions from './ladder.actions';

export interface LadderState {
  currentLadder: LadderModel[];
}

const ladderInitState: LadderState = {
  currentLadder: []
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
    default: {
      return state;
    }
  }
}
