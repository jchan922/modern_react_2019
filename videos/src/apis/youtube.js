import axios from 'axios';

const KEY = 'AIzaSyD0y6GwjMFxSG34QISZFGj5ckjw98uzHM8';

// create a default axios object with default params
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
