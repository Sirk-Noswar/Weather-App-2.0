import {
    Location,
    TempUnits,
    TimeUnits,
    BackgroundConfig
} from '../'

export interface Settings {
    timeFormat: TimeUnits
    tempUnits: TempUnits
    background?: BackgroundConfig
    location?: Location
}
