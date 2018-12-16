import axios from 'axios';

// axios default configuration for unsplash
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 506ab5c82dcf18684ebd97dd751dfd1cfbd37ca6c495bbdb45f77d9804e104fb'
    }
});
 