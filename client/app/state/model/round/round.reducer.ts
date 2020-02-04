import { Round } from './../../../shared/models/round.model';
import * as roundActions from './round.actions';

export interface RoundState {
  roundWithId: Round[];
  selectedRound: Round;
  editRound: boolean;
}

const roundInitState: RoundState = {
  roundWithId: [],
  selectedRound: null,
  editRound: null
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
    case roundActions.EDIT_ROUND: {
      return {
        ...state,
        editRound: null
      };
    }
    case roundActions.EDIT_ROUND_SUCCESS: {
      return {
        ...state,
        editRound: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
