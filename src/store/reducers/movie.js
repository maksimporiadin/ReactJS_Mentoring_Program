import { updateObject } from '../../shared/utilityMethods';
import * as actionTypes from '../actions/actionTypes';

import { handleActions } from 'redux-actions';
import reduceReducers from 'reduce-reducers';

const initialState = {
    movie: {},
    isLoading: true,
    error: null
}

const reducers = handleActions({
    [actionTypes.MOVIE_START]: (state, action) => {
        return updateObject(state, { isLoading: true } );
    },
    [actionTypes.MOVIE_SUCCESS]: (state, action) => {
        return updateObject(state, {
            isLoading: false,
            error: null,
            movie: updateObject(action.payload, {}),
        } );
    },
    [actionTypes.MOVIE_FAILED]: (state, action) => {
        return updateObject(state, { isLoading: false, error: action.payload.error } );
    }},
    initialState
);

export default reduceReducers(reducers);