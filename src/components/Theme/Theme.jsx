import { ThemeProvider, StyledEngineProvider, CssBaseline } from '@mui/material'
import { createTheme } from '@mui/material/styles'
// import { blue } from '@mui/material/colors'

export const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#FFF',
            light: '#F2F2F2',
            dark: '#C8C6C6',
            contrastText: '#2D3748',
        },
        secondary: {
            main: '#009ee3',
        },
        text: {
            primary: '#2D3748',
        },
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
            fontSize: '3.75rem',
        },
        h6: {
            fontWeight: 700,
            fontSize: '1rem',
        },
        body1: {
            fontSize: '0.9rem',
            fontFamily: 'Roboto',
            fontWeight: 400,
            lineHeight: 1.5,
        },
    },
})

export const Theme = ({ children }) => {
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </StyledEngineProvider>
    )
}
