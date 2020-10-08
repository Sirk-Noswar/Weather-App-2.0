import { actionTypes } from '../actionTypes'
import { Forecast } from './types'
import { ForecastActionsTypes } from '../actions/types'

const initialState: Forecast = {
  currentForecast: null,
  extendedForecast: null,
}

export default (state = initialState, action: ForecastActionsTypes) => {
  const newState = { ...state }
  switch (action.type) {
    case actionTypes.FETCH_EXTENDED_FORECAST:
      newState.extendedForecast = action.extendedForecast
      return newState
    case actionTypes.FETCH_CURRENT_FORECAST:
      newState.currentForecast = action.currentForecast
      return newState
    default:
      return state
  }
}
