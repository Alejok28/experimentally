import React from 'react';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';

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
  const { snippet } = video;

  return (
    <Grid className={classes.grid} item xs={12}>
      <Tooltip title={escapeHtml(snippet.title)}>
        <img
          className={classes.img}
          src={snippet.thumbnails.default.url}
          alt={snippet.title}
          onClick={() => handleClick(video)}
        />
      </Tooltip>
    </Grid>
  )
}


RecommendedItem.propTypes = {
  video: PropTypes.object.isRequired,
  handleClick: PropTypes.func
};
