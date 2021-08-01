import {createAsyncThunk} from "@reduxjs/toolkit";
import {Settings} from "../../models";

export const fetchUserSettings = createAsyncThunk(
    'settings/fetchSettings',
    async (args, thunkApi) => {
        return {
            location: {
                city: 'boise',
                state: 'idaho'
            }
        } as Settings
    }
)
