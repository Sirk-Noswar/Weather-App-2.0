import { actionTypes } from '../actionTypes'
import {
    WeatherData,
    Settings,
    CurrentForecast,
    ExtendedForecast
} from '../appTypes'

export interface FetchSettingsAction {
    type: typeof actionTypes.FETCH_SETTINGS,
    payload: Settings
}
export interface SetLocationAction {
    type: typeof actionTypes.SET_LOCATION,
    payload: number | null
}
export interface SetTimeFormatAction {
    type: typeof actionTypes.SET_TIME_FORMAT,
    payload: string
}
export interface SetTempUnitsAction {
    type: typeof actionTypes.SET_TEMP_UNITS,
    payload: string
}
export interface SetBackgroundAction {
    type: typeof actionTypes.SET_BACKGROUND,
    payload: string
}
export type SettingsActions = SetLocationAction | SetTimeFormatAction | SetTempUnitsAction | SetBackgroundAction


export interface FetchGraphDataAction {
    type: typeof actionTypes.FETCH_GRAPH_DATA,
    payload: WeatherData[]
}
export interface SetCategoryAction {
    type: typeof actionTypes.SET_GRAPH_CATEGORY,
    payload: string
}
export interface SetScrollAction {
    type: typeof actionTypes.SET_GRAPH_SCROLL_POSITION,
    payload: number // will be a percentage
}
export interface CollapseGraphAction {
    type: typeof actionTypes.COLLAPSE_WEATHER_GRAPH
}
export interface ExpandGraphAction {
    type: typeof actionTypes.EXPAND_WEATHER_GRAPH
}
export type GraphActions = FetchGraphDataAction | SetCategoryAction | SetScrollAction | CollapseGraphAction | ExpandGraphAction


export interface FetchExtendedForecast {
    type: typeof actionTypes.FETCH_EXTENDED_FORECAST,
    payload: ExtendedForecast
}
export interface FetchCurrentForecast {
    type: typeof actionTypes.FETCH_CURRENT_FORECAST,
    payload: CurrentForecast
}
export type ForecastActions = FetchExtendedForecast | FetchCurrentForecast