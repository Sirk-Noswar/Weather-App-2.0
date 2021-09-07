import React from 'react'
import Styled from 'styled-components'

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
export const CurrentTime = (props: {
    time: string,
    date: string
}) => (
    <div>
        <TimerText>{props.time}</TimerText>
        <DateText>{props.date}</DateText>
    </div>
)
