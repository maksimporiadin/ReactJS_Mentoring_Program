import * as actionTypes from './actionTypes';
import api from '../../api/index';
import { createAction } from 'redux-actions';

const doMoviesStartAction = createAction(actionTypes.MOVIES_START);
const doMoviesSuccessAction  = createAction(actionTypes.MOVIES_SUCCESS);
const doMoviesFailedAction = createAction(actionTypes.MOVIES_FAILED);

export const doMoviesChangeSearchAction = createAction(actionTypes.MOVIES_CHANGE_SEARCH);
export const doMoviesChangeSortAction = createAction(actionTypes.MOVIES_CHANGE_SORT);
export const doSortingMoviesAction = createAction(actionTypes.SORTING_MOVIES);

export const getMovies = (query) => {
    return async dispatch => {
        dispatch(doMoviesStartAction());

        try {
            const responce = await api.getMovies(query);
            dispatch(doMoviesSuccessAction({ movies: responce.data.data, total : responce.data.total }));
        } catch (error){
            dispatch(doMoviesFailedAction());
            console.log(`request GET: /movies was fail`);
        }
    };
};