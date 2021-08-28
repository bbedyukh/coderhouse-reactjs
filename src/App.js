import Navbar from './compenents/Navbar/Navbar.jsx'
import Content from './compenents/Content/Content.jsx'
import { createMuiTheme, ThemeProvider, Divider } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    mode: "light",
    primary: {
      main: '#FFF',
      light: '#F0E5CF',
      dark: '#C8C6C6',
      contrastText: '#2D3748'
    },
    secondary: {
      main: '#3F51B5'
    },
    typography: {
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
    }
  }
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
