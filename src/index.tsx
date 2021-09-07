import React from 'react'
import ReactDOM from 'react-dom'
import ReduxStore from './boilerplate/store-config'
import Routes from './boilerplate/router-config'
import AppTheme from './boilerplate/theme-config'

/*ReactDOM.render(
  <React.StrictMode>
    <ReduxStore>
      <AppTheme>
        <Routes />
      </AppTheme>
    </ReduxStore>
  </React.StrictMode>,
  document.getElementById('root'),
)*/

ReactDOM.render(
    <React.StrictMode>
        <ReduxStore>
            <Routes />
        </ReduxStore>
    </React.StrictMode>,
    document.getElementById('root'),
)
