import { updateObject } from '../../shared/utilityMethods';
import { SEARCH_BY } from "../../App.constants";
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    movies: [],
    searchBy: SEARCH_BY.TITLE.value,
    sortBy: '',
    limit: 10,
    total: 0,
    isLoading: false
};

const moviesStart = (state, action) => {
    return updateObject(state, {error: null, loading: true} );
};

const moviesSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        movies: [...action.movies],
        total: action.total
    } );
};

const moviesFailed = (state, action) => {
    return updateObject(state, {
        loading: false
    } );
};

const moviesChangeSearch = (state, action) => {
    return updateObject(state, {
        searchBy: action.searchBy
    } );
};

const moviesChangeSort = (state, action) => {
    return updateObject(state, {
        sortBy: action.sortBy
    } );
};

const sortingMovies = (state, action) => {
    return updateObject(state, {
        movies: action.movies
    } );
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.MOVIES_START: return moviesStart(state, action);
        case actionTypes.MOVIES_SUCCESS: return moviesSuccess(state, action);
        case actionTypes.MOVIES_FAILED: return moviesFailed(state, action);
        case actionTypes.MOVIES_CHANGE_SEARCH: return moviesChangeSearch(state, action);
        case actionTypes.MOVIES_CHANGE_SORT: return moviesChangeSort(state, action);
        case actionTypes.SORTING_MOVIES: return sortingMovies(state, action);

        default: return state;
    }
};

export default reducer;