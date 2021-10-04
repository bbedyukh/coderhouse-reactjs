import { ThemeProvider, StyledEngineProvider, CssBaseline } from '@mui/material'
import { createTheme } from '@mui/material/styles'
// import { blue } from '@mui/material/colors'

export const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            // main: '#18191A',
            main: '#242526',
        },
        secondary: {
            main: '#2D88FF',
        },
        text: {
            primary: '#FFF',
        },
    },
    typography: {
        fontFamily: 'Roboto',
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
