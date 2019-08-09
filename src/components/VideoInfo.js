import React, {useState, useEffect} from 'react';
import YouTubePlayer from 'react-player/lib/players/YouTube'
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


import youtube from '../api/youtube';
import { escapeHtml } from '../utils/functions';

export default function VideoInfo({ video }) {
  const [loading, setLoading] = useState(false)
  const [statistics, setStatistics] = useState(false)
  const { id, snippet } = video;

  
  useEffect(() => {
    const fetchData = async (searchValue) => {
      setLoading(true);
      const response = await youtube.get('/videos', {
        params: {
          id: id.videoId,
          part: 'statistics',
          key: 'AIzaSyCynpKM_MFUdfczSQh8jIZRgbQtceNlB3E'
        }
      })
      setStatistics(response.data.items[0].statistics);
      setLoading(false);
    }
    fetchData('')
  }, [id.videoId]);

  return (
    <Container style={{ margin: '50px 0'}}>
    {loading ? (
        <CircularProgress color="secondary" />
    ) : (
      <Grid container spacing={3} style={{ height: '50vh'}} >
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
            <CardActions style={{ display: 'flex', justifyContent: 'space-between'}}>
              <Like color="secondary" />{statistics.likeCount}
              <Dislike color="error" />{statistics.dislikeCount}
              <Comments color="disabled" />{statistics.commentCount}
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    )}
    </Container>
  );
}