import { Location } from './../../../shared/models/location.model';
import * as locationActions from './locations.actions';

export interface LocationState {
  locations: Location[];
}

const locationInitState: LocationState = {
  locations: []
};

export function locationReducer(state = locationInitState, action: locationActions.LocationAction) {
  switch (action.type) {
    case locationActions.GET_LOCATIONS: {
      return {
        ...state,
        locations: null
      };
    }
    case locationActions.GET_LOCATIONS_SUCCESS: {
      return {
        ...state,
        locations: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
