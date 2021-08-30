import Navbar from './compenents/Navbar/Navbar.jsx'
import Content from './compenents/Content/Content.jsx'
import { createMuiTheme, ThemeProvider, Divider } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: '#FFF',
      light: '#F0E5CF',
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
    fontFamily: 'Lato',
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
      fontSize: '1.25rem'
    },
    body1: {
      fontSize: '1rem',
      fontFamily: 'Lato',
      fontWeight: 400,
      lineHeight: 1.5
    }
  },
  
})

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Divider />
        <Content />
      </ThemeProvider>
    </div>
  );
}

export default App;
