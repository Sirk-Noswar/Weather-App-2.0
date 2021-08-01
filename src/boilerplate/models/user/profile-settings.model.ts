import {
    Location,
    TempUnits,
    TimeUnits,
    BackgroundConfig
} from '../shared'

export interface Settings {
    timeFormat: TimeUnits
    tempUnits: TempUnits
    background?: BackgroundConfig
    location?: Location
}
