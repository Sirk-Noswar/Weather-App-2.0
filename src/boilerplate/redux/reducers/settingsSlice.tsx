import {
  createAsyncThunk,
  createSlice,
  PayloadAction
} from "@reduxjs/toolkit";
import {Settings} from "../../models";
import {fetchUserSettings} from "../thunks";

const initialState: Settings = {
  location: null,
  timeFormat: 'civilian',
  tempUnits: 'F',
  background: 'static',
}

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setTempUnit: (state: Settings, action: PayloadAction<TempUnitEnum>) => {
      state.tempUnits = action.payload
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

