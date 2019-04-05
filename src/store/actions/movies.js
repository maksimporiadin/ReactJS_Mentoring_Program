import * as actionTypes from './actionTypes';
import api from '../../api/index';

const moviesStart = () => {
    return {
        type: actionTypes.MOVIES_START
    };
};

export const getMovies = (query) => {
    return async dispatch => {
        dispatch(moviesStart());

        try {
            const responce = await api.getMovies(query);
            dispatch(moviesSuccess(responce.data.data, responce.data.total));
        } catch (error){
            dispatch(moviesFailed());
            console.log(`request GET: /movies was fail`);
        }

    };
};

const moviesSuccess = (movies, total) => {
    return {
        type: actionTypes.MOVIES_SUCCESS,
        movies: movies,
        total: total
    };
};

export const moviesFailed = () => {
    return {
        type: actionTypes.MOVIES_FAILED
    };
};

export const moviesChangeSearch = (searchBy) => {
    return {
        type: actionTypes.MOVIES_CHANGE_SEARCH,
        searchBy: searchBy
    };
};

export const moviesChangeSort = (sortBy) => {
    return {
        type: actionTypes.MOVIES_CHANGE_SORT,
        sortBy: sortBy
    };
};

export const sortingMovies = (movies, sort) => {
    const sortedMovies = movies.concat().sort((a, b) => a[sort] < b[sort] ? 1 : -1);

    return {
        type: actionTypes.SORTING_MOVIES,
        movies: sortedMovies
    };
};