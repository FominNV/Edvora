import { IRide, IUser, URLS } from './types'

enum FETCH_METHOD {
  GET = 'GET',
}

interface IData {
  data: IRide[] | IUser
}

interface IFetchOptions {
  method: FETCH_METHOD
}

const fetchOptions: IFetchOptions = {
  method: FETCH_METHOD.GET,
}

interface IState {
  data: any
  error: undefined | Error
}

const fetchAction = async (url: URLS) => {
  const state: IState = {
    data: [],
    error: undefined,
  }

  try {
    const response = await fetch(url, fetchOptions)

    if (!response.ok) {
      throw new Error(response.statusText)
    }

    state.data = (await response.json()) as IData
  } catch (error) {
    state.error = error as Error
  }

  return state
}

export default fetchAction
