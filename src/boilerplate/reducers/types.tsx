export interface WeatherData {
  expectedValue: number
  timeStamp: number
}

export interface ForecastSummary {
  date: number
  dayAbbreviation: string
  highTemp: number
  lowTemp: number
  weatherIconId: number
}

export interface Settings {
  location: number | null
  timeFormat: string
  tempUnits: string
  background: string
}

export interface CurrentForecast {
  temp: number
  perceivedTemp: number
  UVIndex: number
  humidity: number
  precipitationInMM: number
  weatherGraph: WeatherData[]
}
export interface ExtendedForecast {
  weekForecastSummary: ForecastSummary[]
  weatherGraph: WeatherData[]
}
export interface Forecast {
  currentForecast: CurrentForecast | null
  extendedForecast: ExtendedForecast | null
}

export interface Graph {
  weatherData: WeatherData[] | null
  category: string
  scrollPosition: number
  isGraphCollapsed: boolean
}
