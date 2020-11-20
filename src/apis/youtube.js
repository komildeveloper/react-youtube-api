import axios from 'axios';

const KEY = 'AIzaSyB-MJ8FxUtxDKqy0yqECpd5Q7oviwLPPHo';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',

  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});
