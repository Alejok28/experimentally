import apisauce from 'apisauce'

const YOUTUBE_KEY = 'AIzaSyCynpKM_MFUdfczSQh8jIZRgbQtceNlB3E';

const create = () => {
  const api = apisauce.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    headers: {
      'Content-Type': 'application/json'
    },
    timeout: 8000
  });

// *------------------- GET API CALLS -----------------------------*
  const getVideos = function (searchValue) {
    const params =  {
      q: searchValue,
      part: 'snippet',
      type: 'video',
      maxResults: 6,
      key: YOUTUBE_KEY
    }
    return (
      api
        .get(`/search`, params)
        .then(response => {
          return response;
        })
    );
  }

  const getStatistics = function (videoId) {
    const params= {
      id: videoId,
      part: 'statistics',
      key: YOUTUBE_KEY
    }
    return (
      api
        .get(`/videos`, params)
        .then(response => {
          return response;
        })
    );
  }

  return { getVideos, getStatistics }
}

export default create();
