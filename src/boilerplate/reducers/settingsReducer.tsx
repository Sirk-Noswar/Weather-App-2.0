import { actionTypes } from '../actionTypes'
import

const initialState = {
    location: null,
    timeFormat: 'civilian',
    tempUnits: 'F',
    background: 'static'
}

export default (state = initialState, action) => {
    const newState = {...state}
    switch(action.type) {
        case actionTypes.SET_LOCATION:
            newState.background = action.payload
            return newState
        case actionTypes.SET_TIME_FORMAT:
            newState.timeFormat = action.payload
            return newState
        case actionTypes.SET_TEMP_UNITS:
            newState.tempUnits = action.payload
            return newState
        case actionTypes.SET_BACKGROUND:
            newState.background = action.payload
            return newState
        default:
            return state
    }
}