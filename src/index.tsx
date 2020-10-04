import React from 'react'
import ReactDOM from 'react-dom'
import ReduxStore from './boilerplate/storeConfig'
import Routes from './boilerplate/routerConfig'
import AppTheme from './boilerplate/themeConfig'

ReactDOM.render(
  <React.StrictMode>
    <ReduxStore>
      <AppTheme>
        <Routes />
      </AppTheme>
    </ReduxStore>
  </React.StrictMode>,
  document.getElementById('root'),
)
