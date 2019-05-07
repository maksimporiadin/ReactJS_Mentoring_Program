import axios from '../axios';
import fetch from 'isomorphic-fetch';
import queryString from  'query-string';

const api = {
    async getMovies(data) {
        //const response = await axios.get('/movies', { params: data });
        const response = await fetch(`https://react-cdp-api.herokuapp.com/movies?${queryString.stringify(data)}`, { method: 'get' });
        return await response.json();
    },

    async getMovie(id) {
        const response = await axios.get(`/movies/${id}`);
        return response;
    }
};

export default api;