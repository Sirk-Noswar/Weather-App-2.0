import {forecastApi} from "../slices";
import {createSelector} from "@reduxjs/toolkit";

export const selectForecast = (state: any) => state[forecastApi.reducerPath]

// generic selectors
export const selectHourlyHumidity = () => ({})
export const selectHourlyTemperature = () => ({})
export const selectHourlyPrecipitation = () => ({})

// memoized feature selectors
export const selectCurrentForecast = createSelector(
    selectForecast,
    (state: any) => {
        // todo: parse current forecast
        //state.current
        return {}
    }
)

export const selectCurrentHourly = createSelector(
    selectForecast,
    (state: any) => {}
)

//export const select
