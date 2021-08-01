export interface TimeOfMeasurement {
    timestamp: number
    dayOfWeek: string
}

export interface TemperatureMeasurement {
    actual: number
    perceivedTemp: number
    range: {
        high: number
        low: number
    }
}

export interface HumidityMeasurement {
    percent: number
    absolute: number
    range: {
        absoluteHigh: number
        absoluteLow: number
        relativeHigh: number
        relativeLow: number
    }
}

export interface PrecipitationMeasurement {
    percent: number
    absolute: number
    range: {
        absoluteHigh: number
        absoluteLow: number
        relativeHigh: number
        relativeLow: number
    }
}

// encapsulates physical weather properties, such as what action is occurring
export interface PhysicalBehavior {
    action: string
}

