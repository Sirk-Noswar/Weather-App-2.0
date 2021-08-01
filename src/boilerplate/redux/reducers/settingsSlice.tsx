import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Settings} from "../../models";
import {fetchUserSettings} from "../thunks";
import {BackgroundConfig, Location, TempUnits, TimeUnits} from "../../models/shared";

const initialState: Settings = {
  tempUnits: TempUnits.F,
  timeFormat: TimeUnits.military
}

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setTempUnits: (state: Settings, action: PayloadAction<TempUnits>) => {
      state.tempUnits = action.payload
    },
    setTimeUnits: (state: Settings, action: PayloadAction<TimeUnits>) => {
      state.timeFormat = action.payload
    },
    setLocation: (state: Settings, action: PayloadAction<Location>) => {
      state.location = action.payload
    },
    setBackground: (state: Settings, action: PayloadAction<BackgroundConfig>) => {
      state.background = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
        .addCase(
            fetchUserSettings.fulfilled.type,
            (state: Settings, action: PayloadAction<Settings>) => {
              return action.payload
            }
        )
  }
})

export const {
  setTempUnits,
  setTimeUnits,
  setLocation,
  setBackground
} = settingsSlice.actions
export const settingsReducer = settingsSlice.reducer

