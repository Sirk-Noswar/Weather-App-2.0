import { actionTypes } from '../actionTypes'
import {
  WeatherData,
  Settings,
  CurrentForecast,
  ExtendedForecast,
} from '../reducers/types'

export interface FetchSettingsAction {
  type: typeof actionTypes.FETCH_SETTINGS
  settings: Settings
}
export interface SetLocationAction {
  type: typeof actionTypes.SET_LOCATION
  location: number | null
}
export interface SetTimeFormatAction {
  type: typeof actionTypes.SET_TIME_FORMAT
  timeFormat: string
}
export interface SetTempUnitsAction {
  type: typeof actionTypes.SET_TEMP_UNITS
  tempUnits: string
}
export interface SetBackgroundAction {
  type: typeof actionTypes.SET_BACKGROUND
  background: string
}
export type SettingsActionsTypes =
  | FetchSettingsAction
  | SetLocationAction
  | SetTimeFormatAction
  | SetTempUnitsAction
  | SetBackgroundAction

export interface FetchGraphDataAction {
  type: typeof actionTypes.FETCH_GRAPH_DATA
  weatherData: WeatherData[]
}
export interface SetCategoryAction {
  type: typeof actionTypes.SET_GRAPH_CATEGORY
  category: string
}
export interface SetScrollAction {
  type: typeof actionTypes.SET_GRAPH_SCROLL_POSITION
  scrollPosition: number // will be a percentage
}
export interface CollapseGraphAction {
  type: typeof actionTypes.COLLAPSE_WEATHER_GRAPH
}
export interface ExpandGraphAction {
  type: typeof actionTypes.EXPAND_WEATHER_GRAPH
}
export type GraphActionsTypes =
  | FetchGraphDataAction
  | SetCategoryAction
  | SetScrollAction
  | CollapseGraphAction
  | ExpandGraphAction

export interface FetchExtendedForecast {
  type: typeof actionTypes.FETCH_EXTENDED_FORECAST
  extendedForecast: ExtendedForecast
}
export interface FetchCurrentForecast {
  type: typeof actionTypes.FETCH_CURRENT_FORECAST
  currentForecast: CurrentForecast
}
export type ForecastActionsTypes = FetchExtendedForecast | FetchCurrentForecast
