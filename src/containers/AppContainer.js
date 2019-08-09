import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';

// Components
import Header from '../components/Header'
import RecomendedList from '../components/RecomendedList'
import VideoInfo from '../components/VideoInfo'
import Typography from '@material-ui/core/Typography';

// Others
import youtube from '../api/youtube'


const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100vh',
    backgroundColor: '#333333'
  },
  error: {
    textAlign: 'center',
    margin: '30px'
  }
});

function AppContainer() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const classes = useStyles();

  const fetchData = async (searchValue) => {
    setLoading(true);
    const response = await youtube.getVideos(searchValue)
     if (response.ok) {
        setVideos(response.data.items);
        setSelectedVideo(response.data.items[0])
      }else {
        setError(`Hubo un problema al buscar los videos: ${response.problem}`)
      }
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
      {error && (
        <Typography className={classes.error} color="error" variant="h5" component="h3">
          {error}
        </Typography>
      )}
      <RecomendedList videos={videos} loading={loading} handleClick={handleClick} />
      {selectedVideo && <VideoInfo video={selectedVideo} />}
    </div>
  );
}

export default AppContainer;
