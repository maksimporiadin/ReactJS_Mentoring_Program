import { updateObject } from '../../shared/utilityMethods';
import * as actionTypes from '../actions/actionTypes';

import { handleActions } from 'redux-actions';
import reduceReducers from 'reduce-reducers';

const initialState = {
    movies: [],
    searchBy: '',
    sortBy: '',
    search: '?search=q&searchBy=title',
    limit: 10,
    total: 0,
    isLoading: false
};

const reducers = handleActions({
        [actionTypes.MOVIES_START]: (state, action) => {
            return updateObject(state, {error: null, loading: true} );
        },
        [actionTypes.MOVIES_SUCCESS]: (state, action) => {
            return updateObject(state, {
                loading: false,
                movies: [...action.payload.movies],
                total: action.payload.total
            } );
        },
        [actionTypes.MOVIES_FAILED]: (state, action) => {
            return updateObject(state, { loading: false } );
        },
        [actionTypes.MOVIES_CHANGE_SEARCH]: (state, action) => {
            return updateObject(state, { searchBy: action.payload } );
        },
        [actionTypes.MOVIES_CHANGE_SEARCH_QUERY]: (state, action) => {
            return updateObject(state, { search: action.payload } );
        },
        [actionTypes.MOVIES_CHANGE_SORT]: (state, action) => {
            return updateObject(state, { sortBy: action.payload } );
        },
        [actionTypes.SORTING_MOVIES]: (state, action) => {
            const sortedMovies = action.payload.movies.concat().sort((a, b) => a[action.payload.sort] < b[action.payload.sort] ? 1 : -1);
            return updateObject(state, { movies: sortedMovies } );
        }},
        initialState
    );

export default reduceReducers(reducers);

