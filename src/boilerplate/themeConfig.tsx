import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { AppState } from './redux/reducers/index'

const appTheme = {
  background: '#FFFFFF',
}

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: OpenSans-Bold;
        src: url(./assets/OpenSans-Bold.ttf)
    }
    @font-face {
        font-family: OpenSans-BoldItalic;
        src: url(./assets/OpenSans-BoldItalic.ttf)
    }
    @font-face {
        font-family: OpenSans-ExtraBold;
        src: url(./assets/OpenSans-ExtraBold.ttf)
    }
    @font-face {
        font-family: OpenSans-ExtraBoldItalic;
        src: url(./assets/OpenSans-ExtraBoldItalic.ttf)
    }
    @font-face {
        font-family: OpenSans-Italic;
        src: url(./assets/OpenSans-Italic.ttf)
    }
    @font-face {
        font-family: OpenSans-Light;
        src: url(./assets/OpenSans-Light.ttf)
    }
    @font-face {
        font-family: OpenSans-LightItalic;
        src: url(./assets/OpenSans-LightItalic.ttf)
    }
    @font-face {
        font-family: OpenSans-Regular;
        src: url(./assets/OpenSans-Regular.ttf)
    }
    @font-face {
        font-family: OpenSans-SemiBold;
        src: url(./assets/OpenSans-SemiBold.ttf)
    }
    @font-face {
        font-family: OpenSans-SemiBoldItalic;
        src: url(./assets/OpenSans-SemiBoldItalic.ttf)
    }
    
    body {
        padding: 0;
        margin: 0;
        font-size: 16pt;
    }
    
    h1 {
        font-family: OpenSans-Bold;
        color: #153243;
        font-size: 3em;
    }
    
    p {
        color: #76949F;
    }
`

interface ExpectedProps {
  children: React.ReactNode
}

export default (props: ExpectedProps) => {
  const currentTemp = useSelector(
    (state: AppState) => state.forecast.currentForecast?.temp,
  )
  const [tempTheme, setTempTheme] = useState({
    main: '#153243',
    highlight: '#76949F',
  })

  // determine which theme colors to use based on temperature
  if (currentTemp !== null && currentTemp !== undefined) {
    if (currentTemp <= 0)
      setTempTheme({
        main: '#153243',
        highlight: '#76949F',
      })
    else if (currentTemp >= 2 && currentTemp < 10)
      setTempTheme({
        main: '#343E3D',
        highlight: '#CDD7D6',
      })
    else if (currentTemp >= 10 && currentTemp < 21)
      setTempTheme({
        main: '#F46036',
        highlight: '#B0D0D3',
      })
    else
      setTempTheme({
        main: '#757761',
        highlight: '#F4E76E',
      })
  }

  return (
    <ThemeProvider
      theme={{
        ...appTheme,
        ...tempTheme,
      }}
    >
      {props.children}
      <GlobalStyles />
    </ThemeProvider>
  )
}
