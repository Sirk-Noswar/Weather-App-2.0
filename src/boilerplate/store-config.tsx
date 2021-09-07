import React from 'react'
import { Provider } from 'react-redux'
import { forecastApi } from './redux'
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
  reducer: {
    [forecastApi.reducerPath]: forecastApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(forecastApi.middleware)
})
setupListeners(store.dispatch);

export { store };
export default (props: any) => (
  <Provider store={store}>{props.children}</Provider>
)
