import { updateObject } from '../../shared/utilityMethods';
import * as actionTypes from '../actions/actionTypes';


const initialState = {
    movie: {},
    isLoading: false,
}


const movieStart = (state, action) => {
    return updateObject(state, { isLoading: true } );
};

const movieSuccess = (state, action) => {
    return updateObject(state, {
        isLoading: false,
        movie: updateObject(action.movie, {}),
    } );
};

const movieFailed = (state, action) => {
    return updateObject(state, { isLoading: false } );
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.MOVIE_START: return movieStart(state, action);
        case actionTypes.MOVIE_SUCCESS: return movieSuccess(state, action);
        case actionTypes.MOVIE_FAILED: return movieFailed(state, action);

        default: return state;
    }
};

export default reducer;