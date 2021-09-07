import React from 'react';
import Styled from 'styled-components';
import { 
    AlertIcon, CloudIcon, NavItem, SettingsIcon, CalendarIcon
} from '../../elements';


const Container = Styled.div``;

export const Navlinks = () => (
    <Container>
        <NavItem navText="Today's Forecast">
            <CloudIcon />
        </NavItem>
        <NavItem navText="Week Forecast">
            <CalendarIcon />
        </NavItem>
        <NavItem navText="Alerts">
            <AlertIcon />
        </NavItem>
        <NavItem navText="Settings">
            <SettingsIcon />
        </NavItem>
    </Links>
)