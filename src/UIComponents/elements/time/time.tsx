import React from 'react'
import Styled from 'styled-components'

export interface TimeProps {
    hour: number,
    minute: number,
    dayName: string,
    dayOfMonth: number,
    monthName: string,
    year: number
}

const TimerText = Styled.div`
    font-family: OpenSans-Light;
    font-size: 10em;
    margin-bottom: 1rem;
`
const DateText = Styled.div`
    font-family: OpenSans-Light;
    font-size: 2em;
    text-transform: uppercase;
`
export const Time = (props: TimeProps) => {
    const handleLeadingZero = (value: number): string => 
        value < 10 ? `0${value.toString()}` : value.toString();

    return (
        <div>
            <TimerText>{handleLeadingZero(props.hour)}:{handleLeadingZero(props.minute)}</TimerText>
            <DateText>{props.dayName}, {props.dayOfMonth} {props.monthName} {props.year}</DateText>
        </div>
    );
}
