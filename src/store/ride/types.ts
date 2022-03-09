export interface IRide {
  id: number
  origin_station_code: number
  station_path: number[]
  destination_station_code: number
  date: number
  map_url: URLS
  state: string
  city: string
  distance?: number
}

export interface IUser {
  station_code: number
  name: string
  url: string
}

export interface IRideState {
  rides: {
    all: IRide[] | null
    nearest: IRide[] | null
    upcoming: IRide[] | null
    past: IRide[] | null
    filtered: IRide[] | null
  }
  user: IUser | null
  filterByState: string | false
  filterByCity: string | false
  filterMode: boolean
}

export enum URLS {
  RIDES_URL = 'https://assessment.api.vweb.app/rides',
  USER_URL = 'https://assessment.api.vweb.app/user',
}

export enum RideActionTypes {
  GET_RIDES = 'GET_RIDES',
  SET_NEAREST_RIDES = 'SET_NEAREST_RIDES',
  SET_UPCOMING_RIDES = 'SET_UPCOMING_RIDES',
  SET_PAST_RIDES = 'SET_PAST_RIDES',
  SET_FILTER_RIDES = 'SET_FILTER_RIDES',
  GET_USER = 'GET_USER',
}

type GetRidesAction = {
  type: RideActionTypes.GET_RIDES
  payload: { rides: IRide[] }
}

type SetNearestRidesAction = {
  type: RideActionTypes.SET_NEAREST_RIDES
  payload: { nearestRides: IRide[] }
}

type SetUpcominRidesAction = {
  type: RideActionTypes.SET_UPCOMING_RIDES
  payload: { upcomingRides: IRide[] }
}

type SetPastRidesAction = {
  type: RideActionTypes.SET_PAST_RIDES
  payload: { pastRides: IRide[] }
}

type SetFilterRidesAction = {
  type: RideActionTypes.SET_FILTER_RIDES
  payload: { filterRides: IRide[] | null }
}

type GetUserAction = {
  type: RideActionTypes.GET_USER
  payload: { user: IUser }
}

export type RideAction =
  | GetRidesAction
  | SetNearestRidesAction
  | SetUpcominRidesAction
  | SetPastRidesAction
  | SetFilterRidesAction
  | GetUserAction
