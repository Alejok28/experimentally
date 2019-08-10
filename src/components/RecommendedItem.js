import React from 'react';
import { makeStyles } from '@material-ui/styles';

// Components
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';

// Others
import { escapeHtml } from '../utils/functions';

const useStyles = makeStyles({
  grid: {
    margin: '10px'
  },
  img: {
    cursor: 'pointer'
  }
});

export default function RecommendedItem({ video, handleClick }) {
  const classes = useStyles();
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
}