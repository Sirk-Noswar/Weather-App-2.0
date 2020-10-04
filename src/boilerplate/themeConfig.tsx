import React from react
import { ThemeProvider, createGlobalStyle } from 'styled-components'

const appTheme = {}
const GlobalStyles = createGlobalStyle``

export default (props) => (
  <ThemeProvider theme={appTheme}>
    {props.children}
    <GlobalStyles />
  </ThemeProvider>
)
