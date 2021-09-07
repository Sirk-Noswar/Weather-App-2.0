import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import openBold from "./assets/fonts/OpenSans-Bold.ttf";
import openBoldItalic from "./assets/fonts/OpenSans-BoldItalic.ttf";
import openExtraBold from "./assets/fonts/OpenSans-ExtraBold.ttf";
import openExtraBoldItalic from "./assets/fonts/OpenSans-ExtraBoldItalic.ttf";
import openItalic from "./assets/fonts/OpenSans-Italic.ttf";
import openLight from "./assets/fonts/OpenSans-Light.ttf";
import openLightItalic from "./assets/fonts/OpenSans-LightItalic.ttf";
import openSemiBold from "./assets/fonts/OpenSans-SemiBold.ttf";
import openSemiBoldItalic from "./assets/fonts/OpenSans-SemiBoldItalic.ttf";
import openRegular from "./assets/fonts/OpenSans-Regular.ttf";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: OpenSans-Bold;
    src: url(${openBold});
  }
  @font-face {
    font-family: OpenSans-BoldItalic;
    src: url(${openBoldItalic});
  }
  @font-face {
    font-family: OpenSans-ExtraBold;
    src: url(${openExtraBold});
  }
  @font-face {
    font-family: OpenSans-ExtraBoldItalic;
    src: url(${openExtraBoldItalic});
  }
  @font-face {
    font-family: OpenSans-Italic;
    src: url(${openItalic});
  }
  @font-face {
    font-family: OpenSans-Light;
    src: url(${openLight});
  }
  @font-face {
    font-family: OpenSans-LightItalic;
    src: url(${openLightItalic});
  }
  @font-face {
    font-family: OpenSans-Regular;
    src: url(${openRegular});
  }
  @font-face {
    font-family: OpenSans-SemiBold;
    src: url(${openSemiBold});
  }
  @font-face {
    font-family: OpenSans-SemiBoldItalic;
    src: url(${openSemiBoldItalic});
  }
    
    body {
        padding: 0;
        margin: 0;
        font-size: 16pt;
        font-family: OpenSans-Regular;
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

const colorThemes = {
  cold: {
    main: '#153243',
    highlight: '#76949F',
    gradient: `linear-gradient(355deg, #76949F 0%, #153243 100%)`,
  },
  cool: {
    main: '#343E3D',
    highlight: '#CDD7D6',
    gradient: `linear-gradient(355deg, #CDD7D6 0%, #343E3D 100%)`,
  },
  warm: {
    main: '#F46036',
    highlight: '#B0D0D3',
    gradient: `linear-gradient(355deg, #B0D0D3 0%, #F46036 100%)`,
  },
  hot: {
    main: '#757761',
    highlight: '#F4E76E',
    gradient: `linear-gradient(355deg, #F4E76E 0%, #757761 100%)`,
  },
}

export type ThemeType = typeof colorThemes.cold

interface ExpectedProps {
  children: React.ReactNode
}

export default (props: ExpectedProps) => {
  /*const currentTemp = useSelector(
    (state: AppState) => state.forecast.currentForecast?.temp,
  )*/
  const currentTemp = 0; //todo: fix this
  const [tempTheme, setTempTheme] = useState({
    ...colorThemes.cold,
  })

  // determine which theme colors to use based on temperature
  /*if (currentTemp !== null && currentTemp !== undefined) {
    if (currentTemp <= 0)
      setTempTheme({
        ...colorThemes.cold,
      })
    else if (currentTemp >= 2 && currentTemp < 10)
      setTempTheme({
        ...colorThemes.cool,
      })
    else if (currentTemp >= 10 && currentTemp < 21)
      setTempTheme({
        ...colorThemes.warm,
      })
    else
      setTempTheme({
        ...colorThemes.hot,
      })
  }*/

  return (
    <ThemeProvider
      theme={{
        ...tempTheme,
      }}
    >
      {props.children}
      <GlobalStyles />
    </ThemeProvider>
  )
}
