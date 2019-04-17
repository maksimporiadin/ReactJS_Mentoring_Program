import * as actionTypes from './actionTypes';
import { createAction } from 'redux-actions';

export const doMoviesInitAction = createAction(actionTypes.MOVIES_INIT);
export const doMoviesStartAction = createAction(actionTypes.MOVIES_START);
export const doMoviesSuccessAction  = createAction(actionTypes.MOVIES_SUCCESS);
export const doMoviesFailedAction = createAction(actionTypes.MOVIES_FAILED);

export const doMoviesChangeSearchAction = createAction(actionTypes.MOVIES_CHANGE_SEARCH);
export const doMoviesChangeSearchQueryAction = createAction(actionTypes.MOVIES_CHANGE_SEARCH_QUERY);
export const doMoviesChangeSortAction = createAction(actionTypes.MOVIES_CHANGE_SORT);
export const doSortingMoviesAction = createAction(actionTypes.SORTING_MOVIES);