import React from 'react'
import reduxThunk from 'redux-thunk'
import { Provider } from 'react-redux'
import {
  createStore,
  applyMiddleware,
  compose,
  Store,
  Dispatch,
  Action,
} from 'redux'
import rootReducer from './redux/reducers'

// interfaces
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}
interface ExpectedProps {
  children: React.ReactNode
}

// builder logger enhancer
const logger: any = (store: Store) => (next: Dispatch) => (action: Action) => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd()
  return result
}

// apply middleWares
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const middleWares = [reduxThunk]
if (process.env.NODE_ENV === 'development') middleWares.push(logger)
// create store
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleWares)),
)

export default (props: ExpectedProps) => (
  <Provider store={store}>{props.children}</Provider>
)
