import axios from '../axios';

const api = {
    async getMovies(data) {
        const response = await axios.get('/movies', data);
        return response;
    },

    async getMovie(id) {
        const response = await axios.get(`/movies/${id}`);
        return response;
    }
};

export default api;