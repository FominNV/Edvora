import { IRideState, RideAction, RideActionTypes, URLS } from './types'

const initialState: IRideState = {
  rides: {
    all: null,
    nearest: null,
    upcoming: null,
    past: null,
    filtered: null,
  },
  user: null,
  filterByState: false,
  filterByCity: false,
  filterMode: false,
}

export function rideReducer(
  state: IRideState = initialState,
  action: RideAction
): IRideState {
  switch (action.type) {
    case RideActionTypes.GET_RIDES:
      return {
        ...state,
        rides: { ...state.rides, all: action.payload.rides },
      }

    case RideActionTypes.SET_NEAREST_RIDES:
      return {
        ...state,
        rides: { ...state.rides, nearest: action.payload.nearestRides },
      }

    case RideActionTypes.SET_UPCOMING_RIDES:
      return {
        ...state,
        rides: { ...state.rides, upcoming: action.payload.upcomingRides },
      }

    case RideActionTypes.SET_PAST_RIDES:
      return {
        ...state,
        rides: { ...state.rides, past: action.payload.pastRides },
      }

    case RideActionTypes.SET_FILTER_RIDES:
      return {
        ...state,
        rides: { ...state.rides, filtered: action.payload.filterRides },
      }

    case RideActionTypes.GET_USER:
      return {
        ...state,
        user: action.payload.user,
      }

    default:
      return state
  }
}
