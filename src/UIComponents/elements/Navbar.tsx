import React from 'react'
import { Link } from 'react-router-dom'
import Styled, { css } from 'styled-components'
import { ThemeType } from '../../boilerplate/themeConfig'
import { CloudRain, Calendar, Bell } from 'styled-icons/fa-solid'
import { Settings } from 'styled-icons/ionicons-sharp'

export const GradientBody = Styled.div(
  (props: ThemeType) => css`
    text-align: left;
    background-color: ${props.gradient};
    width: 20%;
    padding: 1rem;
  `,
)

const CollapseButton = Styled.button`
    height: 25px;
    width: 25px;
    background: transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: none;
    box-shadow: none;
`
const ButtonLine = Styled.hr`
    margin: 0;
    padding: 0;
    border: none;
    border-bottom: white solid 2px;
    width: 100%;
    height: 2px;
    margin-bottom: 0.2rem;
`
export const NavButton = (props: {
    onClick: () => void
}) => (
    <CollapseButton onClick={() => props.onClick()}>
        <ButtonLine />
        <ButtonLine style={{ width: '50%' }} />
        <ButtonLine />
    </CollapseButton>
)

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
export const Timer = (props: {
    time: string,
    date: string
}) => (
    <div>
        <TimerText>{props.time}</TimerText>
        <DateText>{props.date}</DateText>
    </div>
)


export const CloudIcon = Styled(CloudRain)`
    width: 20px;
    margin-right: 1rem;
`
export const CalendarIcon = Styled(Calendar)`
    width: 20px;
    margin-right: 1rem;
`
export const AlertIcon = Styled(Bell)`
    width: 20px;
    margin-right: 1rem;
`
export const SettingsIcon = Styled(Settings)`
    width: 20px;
    margin-right: 1rem;
`

const UppercaseText = Styled.span`
    color: 'white';
    text-transform: 'uppercase';
    font-size: '1em';
`
const NavItemContainer = Styled.div`
    display: 'flex';
    justify-content: 'space-between';
    align-items: 'center';
`
export const NavItem = (props: {
    icon: React.ReactNode,
    navText: string
}) => (
    <NavItemContainer>
        {props.icon}
        <UppercaseText>{props.navText}</UppercaseText>
    </NavItemContainer>
)

const LocationLabel = Styled(UppercaseText)`
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


