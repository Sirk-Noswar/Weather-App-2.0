import React from 'react'
import Styled from 'styled-components'

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