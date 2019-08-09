import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import AppContainer from './containers/AppContainer'

const THEME = createMuiTheme({
  typography: {
    "fontFamily": "\"Comfortaa\", \"cursive\"",
    "fontSize": 14,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500
  },
  palette: {
    primary: {
      main: '#1abc9c',
      contrastText: '#333333',
    },
    secondary: {
      main: '#a1cb00',
      contrastText: '#333333',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={THEME}>
      <AppContainer />
    </ThemeProvider>
  );
}

export default App;
