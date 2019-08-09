import React, { useState, useEffect } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import './App.css';
import Header from './components/Header'
import RecomendedList from './components/RecomendedList'
import VideoInfo from './components/VideoInfo'
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
  const [selectedVideo, setSelectedVideo] = useState();
  const [loading, setLoading] = useState(false)

  const fetchData = async (searchValue) => {
    setLoading(true);
    const response = await youtube.get('/search', {
      params: {
        q: searchValue,
        part: 'snippet',
        type: 'video',
        maxResults: 6,
        key: 'AIzaSyCynpKM_MFUdfczSQh8jIZRgbQtceNlB3E'
      }
    })
    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0])
    setLoading(false);
  }

  const handleClick = (video) => {
    setSelectedVideo(video)
  }

  useEffect(()=> {
    fetchData('')
  }, []);

  return (
    <ThemeProvider theme={THEME}>
      <div className="App" style={{ width: '100%', height: '100vh', backgroundColor: '#333333'}}>
        <Header handleSubmit={fetchData} />
        <RecomendedList videos={videos} loading={loading} handleClick={handleClick}/>
        {selectedVideo && <VideoInfo video={selectedVideo} />}
      </div>
    </ThemeProvider>
  );
}

export default App;
