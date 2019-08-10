import React from 'react';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';

// Components
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import RecommendedItem from '../components/RecommendedItem';


const useStyles = makeStyles({
  root: {
    margin: '20px 0',
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
            return (
              <RecommendedItem key={video.id.videoId} video={video} handleClick={handleClick} />
            )
          })}
        </div>
      )
    }
    </Container>
  )
}

RecomendedList.propTypes = {
  videos: PropTypes.array,
  loading: PropTypes.bool,
  handleClick: PropTypes.func
};

RecomendedList.defaultProps = {
  videos: [],
  loading: false
};