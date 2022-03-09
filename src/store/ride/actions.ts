import { Dispatch } from 'redux'
import fetchAction from './fetchAction'
import { IRide, RideAction, RideActionTypes, URLS } from './types'

export const getRides = () => async (dispatch: Dispatch<RideAction>) => {
  const url = URLS.RIDES_URL

  const { data, error } = await fetchAction(url)

  if (error) {
    throw new Error("Can't get rides: " + error)
  }

  dispatch({
    type: RideActionTypes.GET_RIDES,
    payload: {
      rides: data,
    },
  })
}

export const setNearestRides =
  (rides: IRide[]) => (dispatch: Dispatch<RideAction>) => {
    dispatch({
      type: RideActionTypes.SET_NEAREST_RIDES,
      payload: {
        nearestRides: rides,
      },
    })
  }

export const setUpcomingRides =
  (rides: IRide[]) => (dispatch: Dispatch<RideAction>) => {
    dispatch({
      type: RideActionTypes.SET_UPCOMING_RIDES,
      payload: {
        upcomingRides: rides,
      },
    })
  }

export const setPastRides =
  (rides: IRide[]) => (dispatch: Dispatch<RideAction>) => {
    dispatch({
      type: RideActionTypes.SET_PAST_RIDES,
      payload: {
        pastRides: rides,
      },
    })
  }

export const setFilterRides =
  (rides: IRide[] | null) => (dispatch: Dispatch<RideAction>) => {
    dispatch({
      type: RideActionTypes.SET_FILTER_RIDES,
      payload: {
        filterRides: rides,
      },
    })
  }

export const getUser = () => async (dispatch: Dispatch<RideAction>) => {
  const url = URLS.USER_URL

  const { data, error } = await fetchAction(url)

  if (error) {
    throw new Error(`Can't get user: ${error}. Reload page, please...`)
  }

  dispatch({
    type: RideActionTypes.GET_USER,
    payload: {
      user: data,
    },
  })
}
