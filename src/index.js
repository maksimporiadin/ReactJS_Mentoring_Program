import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

import createSagaMiddleware from "redux-saga";

import App from "./App";
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

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(watchInitMoviesSaga);
sagaMiddleware.run(watchInitMovieSaga);

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

const rootElement = document.getElementById("root");

ReactDOM.render(app, rootElement);