import React from 'react'
import { ThemeProvider, CssBaseline } from '@material-ui/core'
import { createTheme } from '@material-ui/core/styles'
// import { blue } from '@material-ui/core/colors'

export const theme = createTheme({
    palette: {
        type: "light",
        primary: {
            main: '#FFF',
            light: '#F2F2F2',
            dark: '#C8C6C6',
            contrastText: '#2D3748'
        },
        secondary: {
            main: '#3F51B5',
        },
        action: {
            main: '#F0E5CF'
        },
        text: {
            primary: '#2D3748'
        }
    },
    typography: {
        fontFamily: 'Roboto',
        fontSize: 14,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
        h1: {
            fontWeight: 800,
            fontSize: '3.75rem'
        },
        h6: {
            fontWeight: 700,
            fontSize: '1rem'
        },
        body1: {
            fontSize: '0.9rem',
            fontFamily: 'Roboto',
            fontWeight: 400,
            lineHeight: 1.5
        }
    },
})

export const Theme = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}
