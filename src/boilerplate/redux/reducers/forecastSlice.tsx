import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const forecastApi = createApi({
  reducerPath: 'forecastApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.openweathermap.org/data/2.5' }),
  endpoints: (builder) => ({
    getOneCallData: builder.query({
      query: (lat: string, long: string) => `onecall?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    })
  })
})

export const {
  useGetOneCallDataQuery
} = forecastApi

