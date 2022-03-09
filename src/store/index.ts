import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'
import { rideReducer } from './ride/reducer'
import thunk from 'redux-thunk'

export type RootState = ReturnType<typeof combinedReducer>

const combinedReducer = combineReducers({
  ride: rideReducer,
})

const composeEnhancers = composeWithDevTools({})

export const store = createStore(
  combinedReducer,
  {},
  composeEnhancers(applyMiddleware(thunk))
)
