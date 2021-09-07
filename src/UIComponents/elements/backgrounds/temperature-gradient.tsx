import React from 'react'
import Styled, { css } from 'styled-components'
import { ThemeType } from '../../../boilerplate/themeConfig'

export const ThemeGradient = Styled.div(
    (props: ThemeType) => css`
      text-align: left;
      background-color: ${props.gradient};
      width: 20%;
      padding: 1rem;
    `,
  )