import axios from 'axios';

/* BASE URL for making requests to database */
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});


export default instance;