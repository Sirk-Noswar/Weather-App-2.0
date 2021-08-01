import {
    TemperatureMeasurement,
    TimeOfMeasurement
} from "./base-weather.models";

export interface DailyForecast {
    id: string
    weatherAction: string
    time: TimeOfMeasurement
    temperature: TemperatureMeasurement
}
