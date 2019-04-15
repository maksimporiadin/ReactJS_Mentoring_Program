import * as actionTypes from '../actions/actionTypes';
import { put, takeEvery } from "redux-saga/effects";
import api from '../../api/index';
import {
    doMovieStartAction,
    doMovieSuccessAction,
    doMovieFailAction
} from '../actions/index'

const initGetMovieSaga = function* initGetMoviesSaga(action) {
    yield put(doMovieStartAction());

    try {
        const response = yield api.getMovie(action.payload);
        yield put(doMovieSuccessAction(response.data));
    } catch (error) {
        yield put(doMovieFailAction());
        console.log(`request GET: /movie/${action.payload} was fail`);
    }
}

export default function* watchInitMovieSaga() {
    yield takeEvery(actionTypes.MOVIE_INIT, initGetMovieSaga);
};