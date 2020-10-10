import React from 'react'
import AppTheme from '../boilerplate/themeConfig'

export const decorators = [
  (Story: React.ElementType) => (
    <AppTheme>
      <Story />
    </AppTheme>
  )
]
