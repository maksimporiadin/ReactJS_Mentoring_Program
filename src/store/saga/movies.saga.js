import * as actionTypes from '../actions/actionTypes';
import { put, takeEvery } from "redux-saga/effects";
import api from '../../api/index';
import {
    doMoviesStartAction,
    doMoviesSuccessAction,
    doMoviesFailedAction
} from '../actions/index'

const initGetMoviesSaga = function* initGetMoviesSaga(action) {
    yield put(doMoviesStartAction());

    try {
        const response = yield api.getMovies(action.payload.params);
        yield put(doMoviesSuccessAction({ movies: response.data, total : response.total }));
    } catch (error) {
        yield put(doMoviesFailedAction());
        console.log(`request GET: /movies was fail`);
    }
}

export default function* watchInitMoviesSaga() {
    yield takeEvery(actionTypes.MOVIES_INIT, initGetMoviesSaga);
}