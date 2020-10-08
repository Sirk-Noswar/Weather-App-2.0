import { actionTypes } from '../actionTypes'
import { GraphActionsTypes } from './types'
import { AppState } from '../reducers'
import { Dispatch } from 'redux'

const fetchGraphData = (hoursInAdvanced: number) => async (
  dispatch: Dispatch,
  getState: () => AppState,
) => {
  // fetch weather data
  //const weatherData: any = await fetch()
  // parse data out
}

const setGraphCategory = () => () => {}

const setGraphScrollPosition = () => () => {}

const collapseWeatherGraph = () => () => {}

const expandWeatherGraph = () => () => {}
