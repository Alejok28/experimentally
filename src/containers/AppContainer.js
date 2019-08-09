import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';

// Components
import Header from '../components/Header'
import RecomendedList from '../components/RecomendedList'
import VideoInfo from '../components/VideoInfo'

// Others
import youtube from '../api/youtube'

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100vh',
    backgroundColor: '#333333'
  },
});

function AppContainer() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState();
  const [loading, setLoading] = useState(false);
  const classes = useStyles();

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

  useEffect(() => {
    fetchData('')
  }, []);

  return (
    <div className={classes.root}>
      <Header handleSubmit={fetchData} />
      <RecomendedList videos={videos} loading={loading} handleClick={handleClick} />
      {selectedVideo && <VideoInfo video={selectedVideo} />}
    </div>
  );
}

export default AppContainer;
