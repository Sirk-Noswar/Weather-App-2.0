import { actionTypes } from '../actionTypes'
import { GraphActionsTypes } from '../actions/types'
import { Graph } from './types'

const initialState: Graph = {
  weatherData: null,
  category: 'TEMPERATURE',
  scrollPosition: 50,
  isGraphCollapsed: true,
}

export default (state = initialState, action: GraphActionsTypes) => {
  const newState = { ...state }
  switch (action.type) {
    case actionTypes.FETCH_GRAPH_DATA:
      newState.weatherData = action.weatherData
      return newState
    case actionTypes.SET_GRAPH_CATEGORY:
      newState.category = action.category
      return newState
    case actionTypes.SET_GRAPH_SCROLL_POSITION:
      newState.scrollPosition = action.scrollPosition
      return newState
    case actionTypes.COLLAPSE_WEATHER_GRAPH:
      newState.isGraphCollapsed = true
      return newState
    case actionTypes.EXPAND_WEATHER_GRAPH:
      newState.isGraphCollapsed = false
      return newState
    default:
      return newState
  }
}
