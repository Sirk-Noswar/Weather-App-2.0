import { combineReducers } from 'redux'
import settingsReducer from './settingsReducer'
import forecastReducer from './forecastReducer'
import graphReducer from './graphReducer'

const rootReducer = combineReducers({
  settings: settingsReducer,
  forecast: forecastReducer,
  weatherGraph: graphReducer,
})

export type AppState = ReturnType<typeof rootReducer>
export default rootReducer
