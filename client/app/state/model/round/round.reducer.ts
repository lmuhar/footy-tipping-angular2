import { Round } from './../../../shared/models/round.model';
import * as roundActions from './round.actions';

export interface RoundState {
  roundWithId: Round[];
  selectedRound: Round;
}

const roundInitState: RoundState = {
  roundWithId: [],
  selectedRound: null
};

export function roundReducer(state = roundInitState, action: roundActions.RoundAction) {
  switch (action.type) {
    case roundActions.ROUND_WITH_ID_NUMBER: {
      return {
        ...state,
        roundWithId: []
      };
    }
    case roundActions.ROUND_WITH_ID_NUMBER_SUCCESS: {
      return {
        ...state,
        roundWithId: action.payload
      };
    }
    case roundActions.GET_ROUND: {
      return {
        ...state,
        selectedRound: null
      };
    }
    case roundActions.GET_ROUND_SUCCESS: {
      return {
        ...state,
        selectedRound: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
