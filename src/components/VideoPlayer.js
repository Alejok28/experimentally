import React from 'react';
import YouTubePlayer from 'react-player/lib/players/YouTube';

export default function VideoPlayer({ videoId}) {
  return (
    <YouTubePlayer
      url={`https://www.youtube.com/watch?v=${videoId}`}
      controls
      playing={false}
      width='100%'
      height='100%'
    />
  );
}