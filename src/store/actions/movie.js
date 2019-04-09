import * as actionTypes from './actionTypes';
import api from '../../api/index';

import { createAction } from 'redux-actions';

const doMovieStartAction = createAction(actionTypes.MOVIE_START);
const doMovieFailAction = createAction(actionTypes.MOVIE_FAILED);
const doMovieSuccessAction = createAction(actionTypes.MOVIE_SUCCESS);

export const doGetMovie = (id) => {
    return async dispatch => {
        dispatch(doMovieStartAction());

        try {
            const responce = await api.getMovie(id);
            dispatch(doMovieSuccessAction(responce.data));
        } catch (error){
            dispatch(doMovieFailAction({ error }));
            console.log(`request GET: /movie/${id} was fail`);
        }
    };
};
