import {
    HumidityMeasurement,
    PhysicalBehavior,
    PrecipitationMeasurement,
    TemperatureMeasurement
} from "./base-weather.models";
import { HourlyForecast } from "./hourly-forecast.model";

export interface CurrentForecast {
    UVIndex: number
    behavior: PhysicalBehavior // showers, sunny, ect.
    temperature: TemperatureMeasurement
    humidity: HumidityMeasurement
    precipitation: PrecipitationMeasurement
    hourlyForecast: HourlyForecast[]
}
