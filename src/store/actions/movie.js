import * as actionTypes from './actionTypes';
import api from '../../api/index';

const movieStart = () => {
    return {
        type: actionTypes.MOVIE_START
    };
};

export const getMovie = (id) => {
    return async dispatch => {
        dispatch(movieStart());

        try {
            const responce = await api.getMovie(id);
            dispatch(movieSuccess(responce.data));
        } catch (error){
            dispatch(movieFailed());
            console.log(`request GET: /movie/${id} was fail`);
        }

    };
};

const movieSuccess = (movie) => {
    return {
        type: actionTypes.MOVIE_SUCCESS,
        movie: movie,
    };
};

export const movieFailed = () => {
    return {
        type: actionTypes.MOVIE_FAILED
    };
};