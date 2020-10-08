import { actionTypes } from '../actionTypes'
import { SettingsActionsTypes, FetchSettingsAction } from '../actions/types'
import { Settings } from './types'

const initialState: Settings = {
  location: null,
  timeFormat: 'civilian',
  tempUnits: 'F',
  background: 'static',
}

export default (
  state = initialState,
  action: SettingsActionsTypes,
): Settings => {
  const newState = { ...state }
  switch (action.type) {
    case actionTypes.FETCH_SETTINGS:
      return action.settings
    case actionTypes.SET_LOCATION:
      newState.location = action.location
      return newState
    case actionTypes.SET_TIME_FORMAT:
      newState.timeFormat = action.timeFormat
      return newState
    case actionTypes.SET_TEMP_UNITS:
      newState.tempUnits = action.tempUnits
      return newState
    case actionTypes.SET_BACKGROUND:
      newState.background = action.background
      return newState
    default:
      return state
  }
}
