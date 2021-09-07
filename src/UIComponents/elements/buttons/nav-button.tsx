import React from "react"
import Styled from 'styled-components'

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