import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

import createSagaMiddleware from "redux-saga";


import moviesReducer from './store/reducers/movies';
import movieReducer from './store/reducers/movie';

import watchInitMoviesSaga from './store/saga/movies.saga';
import watchInitMovieSaga from './store/saga/movie.saga';

const sagaMiddleware = createSagaMiddleware();

let composeEnhancers = compose;

if (typeof window !== 'undefined') {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const rootReducer = combineReducers({
    movies: moviesReducer,
    movie: movieReducer
});

export default (initialState) => {
    const store = createStore(rootReducer,initialState,  composeEnhancers(applyMiddleware(sagaMiddleware)));
        sagaMiddleware.run(watchInitMoviesSaga);
        sagaMiddleware.run(watchInitMovieSaga);

    return store;
};



