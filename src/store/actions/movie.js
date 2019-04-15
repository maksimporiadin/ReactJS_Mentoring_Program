import * as actionTypes from './actionTypes';

import { createAction } from 'redux-actions';

export const doMovieInitAction = createAction(actionTypes.MOVIE_INIT);
export const doMovieStartAction = createAction(actionTypes.MOVIE_START);
export const doMovieFailAction = createAction(actionTypes.MOVIE_FAILED);
export const doMovieSuccessAction = createAction(actionTypes.MOVIE_SUCCESS);
