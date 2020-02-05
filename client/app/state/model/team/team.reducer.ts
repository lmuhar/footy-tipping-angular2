import { Team } from './../../../shared/models/team.model';
import * as teamActions from './team.actions';

export interface TeamState {
  teams: Team[];
}

const teamsInitState: TeamState = {
  teams: []
};

export function teamReducer(state = teamsInitState, action: teamActions.TeamAction) {
  switch (action.type) {
    case teamActions.GET_TEAMS: {
      return {
        ...state,
        teams: null
      };
    }
    case teamActions.GET_TEAMS_SUCCESS: {
      return {
        ...state,
        teams: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
