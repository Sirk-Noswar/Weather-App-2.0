import { combineReducers } from 'redux'
import settingsReducer from './settingsReducer'
import forecastReducer from './forecastReducer'
import graphReducer from './graphReducer'

export default combineReducers({
  settings: settingsReducer,
  forecast: forecastReducer,
  weatherGraph: graphReducer,
})
