import React from 'react';
import { makeStyles } from '@material-ui/styles';

// Components
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Tooltip from '@material-ui/core/Tooltip';

// Others
import { escapeHtml } from '../utils/functions';

const useStyles = makeStyles({
  root: {
    margin: '40px 0',
    textAlign: 'center'
  },
  grid: {
    margin: '10px'
  },
  listContainer:{
    display: 'flex', justifyContent: 'space-between', overflow: 'scroll'
  },
  img: {
    cursor: 'pointer'
  }
});

export default function RecomendedList({ videos = [], loading, handleClick }) {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      {loading ? (
        <CircularProgress color="secondary" />
      ) : (
        <div className={classes.listContainer}>
          {videos.map(video => {
            const { snippet, id } = video;
            return (
              <Grid className={classes.grid} key={id.videoId} item xs={12}>
                <Tooltip title={escapeHtml(snippet.title)}>
                  <img
                    className={classes.img}
                    src={snippet.thumbnails.default.url}
                    alt={id.videoId}
                    onClick={() => handleClick(video)}
                  />
                </Tooltip>
              </Grid>
            )
          })}
        </div>
      )
    }
    </Container>
  )
}