import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';

// Components
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import VideoInfo from '../components/VideoInfo';
import VideoPlayer from '../components/VideoPlayer';

// Others
import youtube from '../api/youtube';

const useStyles = makeStyles({
  root: {
    margin: '25px 0'
  },
  container: {
    height: '50vh'
  },
  error: {
    textAlign: 'center',
    margin: '30px'
  }
});

export default function Video({ video }) {
  const [loading, setLoading] = useState(false)
  const [statistics, setStatistics] = useState({})
  const [error, setError] = useState();
  const classes = useStyles();
  const { id, snippet } = video;

  useEffect(() => {
    const fetchData = async (searchValue) => {
      setLoading(true);
      const response = await youtube.getStatistics(id.videoId)
      if (response.ok) {
        setStatistics(response.data.items[0].statistics);
      } else {
        setError(`Hubo un problema al buscar las estadísticas del video: ${response.problem}`)
      }
      setLoading(false);
    }
    fetchData('')
  }, [id.videoId]);

  return (
    <Container className={classes.root}>
      {error && (
        <Typography className={classes.error} color="error" variant="h5" component="h3">
          {error}
        </Typography>
      )}
      {loading ? (
        <CircularProgress color="secondary" />
      ) : (
          <Grid container spacing={3} className={classes.container}>
            <Grid item xs={12} sm={7}>
              <VideoPlayer videoId={id.videoId} />
            </Grid>
            <Grid item xs={12} sm={5}>
              <VideoInfo snippet={snippet} statistics={statistics} />
            </Grid>
          </Grid>
        )}
    </Container>
  );
}

Video.propTypes = {
  videos: PropTypes.object
};
