import AppTheme from "../boilerplate/themeConfig";

export const decorators = [
    Story => (
        <AppTheme>
            <Story />
        </AppTheme>
    )
]