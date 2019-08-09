import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Tooltip from '@material-ui/core/Tooltip';
import { escapeHtml } from '../utils/functions';

export default function RecomendedList({ videos = [], loading, handleClick }) {
  return (
    <Container style={{ margin:'40px 0'}}>
      {loading ? (
        <CircularProgress color="secondary" />
      ) : (
        <div style={{ display: 'flex', justifyContent: 'space-between', overflow: 'scroll'}}>
          {videos.map(video => {
            const { snippet, id } = video;
            return (
              <Grid key={id.videoId} item xs={12} style={{ margin: '10px'}}>
                <Tooltip title={escapeHtml(snippet.title)}>
                  <img
                    style={{ cursor: 'pointer'}}
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