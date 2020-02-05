import { Round } from './../../../shared/models/round.model';
import * as roundActions from './round.actions';

export interface RoundState {
  roundWithId: Round[];
  selectedRound: Round;
  editRound: boolean;
  allRounds: Round[];
  deleteRound: boolean;
  addRound: boolean;
}

const roundInitState: RoundState = {
  roundWithId: [],
  selectedRound: null,
  editRound: null,
  allRounds: [],
  deleteRound: null,
  addRound: null
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
    case roundActions.GET_ALL_ROUNDS: {
      return {
        ...state,
        allRounds: null
      };
    }
    case roundActions.GET_ALL_ROUNDS_SUCCESS: {
      return {
        ...state,
        allRounds: action.payload
      };
    }
    case roundActions.DELETE_ROUND: {
      return {
        ...state,
        deleteRound: null
      };
    }
    case roundActions.DELETE_ROUND_SUCCESS: {
      return {
        ...state,
        deleteRound: true
      };
    }
    case roundActions.ADD_ROUND: {
      return {
        ...state,
        addRound: null
      };
    }
    case roundActions.ADD_ROUND_SUCCESS: {
      return {
        ...state,
        addRound: true
      };
    }
    default: {
      return state;
    }
  }
}
