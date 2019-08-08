import React, { useState, useEffect } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import './App.css';
import Header from './components/Header'
import youtube from './api/youtube'

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
  const [videos, setVideos] = useState([]);

  const fetchData = async (searchValue) => {
    const response = await youtube.get('/search', {
      params: {
        q: searchValue,
        part: 'snippet',
        type: 'video',
        maxResults: 6,
        key: 'AIzaSyCynpKM_MFUdfczSQh8jIZRgbQtceNlB3E'
      }
    })
    setVideos(response.items);
  }

  useEffect(()=> {
    fetchData('Reactjs')
  }, []);

  return (
    <ThemeProvider theme={THEME}>
      <div className="App">
        <Header handleSubmit={fetchData} />
      </div>
    </ThemeProvider>
  );
}

export default App;
