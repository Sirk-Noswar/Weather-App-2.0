// @ts-ignore
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Alerts from '../UIComponents/pages/Alerts'
import CurrentForecast from '../UIComponents/pages/CurrentForecast'
import ExtendedForecast from '../UIComponents/pages/ExtendedForecast'
import Settings from '../UIComponents/pages/Settings'

export const routes = {
  TODAYS_FORECAST: '/',
  EXTENDED_FORECAST: '/extendedForecast',
  ALERTS: '/alerts',
  SETTINGS: '/settings',
}

export default () => (
  <Router>
    <Routes>
      <Route path={routes.TODAYS_FORECAST} element={<CurrentForecast />} />
      <Route path={routes.EXTENDED_FORECAST} element={<ExtendedForecast />} />
      <Route path={routes.ALERTS} element={<Alerts />} />
      <Route path={routes.SETTINGS} element={<Settings />} />
    </Routes>
  </Router>
)
