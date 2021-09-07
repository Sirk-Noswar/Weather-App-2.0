import React from 'react'
import AppTheme from '../src/boilerplate/theme-config'

export const decorators = [
  (Story: React.ElementType) => (
    <AppTheme>
      <Story />
    </AppTheme>
  )
]
