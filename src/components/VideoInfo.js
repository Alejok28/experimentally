import React from 'react';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';

// Components
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';

// Icons
import Like from '@material-ui/icons/ThumbUp';
import Dislike from '@material-ui/icons/ThumbDown';
import Comments from '@material-ui/icons/Comment';

// Others
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

export default function VideoInfo({ snippet, statistics }) {
  const classes = useStyles();
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {escapeHtml(snippet.title)}
        </Typography>

        <Typography variant="body2" color="textSecondary" component="p">
          {snippet.description}
        </Typography>
      </CardContent>
      {statistics && (
        <CardActions className={classes.actions}>
          <Like color="secondary" />{statistics.likeCount}
          <Dislike color="error" />{statistics.dislikeCount}
          <Comments color="disabled" />{statistics.commentCount}
        </CardActions>
      )}
    </Card>
  );
}



VideoInfo.propTypes = {
  snippet: PropTypes.object.isRequired,
  statistics: PropTypes.object,
};

VideoInfo.defaultProps = {
  statistics: undefined
};