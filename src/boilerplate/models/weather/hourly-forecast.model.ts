import {TemperatureMeasurement, TimeOfMeasurement} from "./base-weather.models";

export interface HourlyForecast {
    id: string
    temperature: TemperatureMeasurement
    time: TimeOfMeasurement
}

/*export interface Graph {
    weatherData: WeatherData[] | null
    category: string
    scrollPosition: number
    isGraphCollapsed: boolean
}*/
