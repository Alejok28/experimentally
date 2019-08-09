import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/styles';
import YouTubePlayer from 'react-player/lib/players/YouTube';

// Components
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Like from '@material-ui/icons/ThumbUp';
import Dislike from '@material-ui/icons/ThumbDown';
import Comments from '@material-ui/icons/Comment';

// Others
import youtube from '../api/youtube';
import { escapeHtml } from '../utils/functions';

const useStyles = makeStyles({
  root: {
    margin: '50px 0'
  },
  container:{ 
    height: '50vh'
  },
  actions: {
    display: 'flex', justifyContent: 'space-between'
  },
  error: {
    textAlign: 'center',
    margin: '30px'
  }
});

export default function VideoInfo({ video }) {
  const [loading, setLoading] = useState(false)
  const [statistics, setStatistics] = useState(false)
  const [error, setError] = useState();
  const classes = useStyles();
  const { id, snippet } = video;

  useEffect(() => {
    const fetchData = async (searchValue) => {
      setLoading(true);
      const response = await youtube.getStatistics(id.videoId)
      if (response.ok) {
        setStatistics(response.data.items[0].statistics);
      }else {
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
          <YouTubePlayer
            url={`https://www.youtube.com/watch?v=${id.videoId}`}
            controls
            playing={false}
            width='100%'
            height='100%'
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {escapeHtml(snippet.title)}
              </Typography>

              <Typography variant="body2" color="textSecondary" component="p">
                {snippet.description}
              </Typography>
            </CardContent>
            {!error && (
              <CardActions className={classes.actions}>
                <Like color="secondary" />{statistics.likeCount}
                <Dislike color="error" />{statistics.dislikeCount}
                <Comments color="disabled" />{statistics.commentCount}
              </CardActions>
            )}
          </Card>
        </Grid>
      </Grid>
    )}
    </Container>
  );
}