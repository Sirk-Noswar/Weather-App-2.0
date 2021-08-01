import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Location } from "../../models/shared";

const forecastApi = createApi({
  reducerPath: 'forecastApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.openweathermap.org/data/2.5' }),
  endpoints: (builder) => ({
    getOneCallData: builder.query<any, Pick<Location, 'long' | 'lat'>>({
      query: (location) => `onecall?lat=${location.lat}&lon=${location.long}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    })
  })
})

export const {
  useGetOneCallDataQuery
} = forecastApi
export { forecastApi }
