import React, { useEffect, useState } from 'react';
import Styled from 'styled-components';
import { TimeUnits } from '../../../boilerplate/models';
import { Time, TimeProps } from '../../elements';
import { DateTime } from 'luxon'

export interface CurrentTimeProps {
    timeUnits: TimeUnits 
}

const Container = Styled.div``;

export const CurrentTime = (props: CurrentTimeProps) => {
    const [time, setTime] = useState<TimeProps>({
        hour: 0,
        minute: 0,
        dayName: 'Monday',
        dayOfMonth: 2,
        monthName: 'January',
        year: 1970
    });

    useEffect(() => {
        const timer = setTimeout(() => {
            const date = DateTime.now();
            setTime({
                hour: date.toFormat('h'),
                minute: date.toFormat('m'),
                dayName: date.toFormat('EEEE'),
                dayOfMonth: date.toFormat('d'),
                monthName: date.toFormat('MMMM'),
                year: date.toFormat('y')
            });
        }, 1000)

        return () => {
            clearTimeout(timer);
        }
    }, [])    

    return (
        <Container>
            <Time {...time}></Time>
        </Container>
    )
}