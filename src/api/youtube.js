import axios from 'axios';
const KEY = 'AIzaSyCynpKM_MFUdfczSQh8jIZRgbQtceNlB3E';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 6,
    key: KEY
  }
})