import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

import createSagaMiddleware from "redux-saga";


import moviesReducer from './store/reducers/movies';
import movieReducer from './store/reducers/movie';

import watchInitMoviesSaga from './store/saga/movies.saga';
import watchInitMovieSaga from './store/saga/movie.saga';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    movies: moviesReducer,
    movie: movieReducer
});

export default createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(watchInitMoviesSaga);
sagaMiddleware.run(watchInitMovieSaga);

