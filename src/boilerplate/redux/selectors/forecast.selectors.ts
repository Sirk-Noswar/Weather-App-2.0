import {forecastApi} from "../reducers";
import {createSelector} from "@reduxjs/toolkit";

export const selectForecast = (state: any) => state[forecastApi.reducerPath]

export const selectCurrent = createSelector(
    selectForecast,
    (state: any) => state.current
)

//export const select
