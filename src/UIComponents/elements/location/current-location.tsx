import React from 'react'
import Styled, { css } from 'styled-components'

const LocationLabel = Styled.span`
    color: 'white';
    text-transform: 'uppercase';
    font-size: 2em;
    margin-bottom: 1rem;
`
const LocationText = Styled.div`
    color: white;
    font-family: OpenSans-Light;
`
export const Location = (props: {
    location: string
}) => (
    <div>
        <LocationLabel>Current Location</LocationLabel>
        <LocationText>{props.location}</LocationText>
    </div>
)