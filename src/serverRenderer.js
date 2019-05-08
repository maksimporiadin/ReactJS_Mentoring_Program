import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from "./App";

import store from './store';
import api from './api';
import queryString from  'query-string';

const router = require('express').Router();

function renderHTML(html, preloadedState) {
    return `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            ${process.env.NODE_ENV === 'development' ? '' : '<link href="/css/main.css" rel="stylesheet" type="text/css">'}
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
            <title>React Server Side Rendering</title>
        </head>
    
        <body>
            <div id="root">${html}</div>
            <script>
                // WARNING: See the following for security issues around embedding JSON in HTML:
                // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
                window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\\u003c')}
            </script>
            <script src="/js/main.js"></script>
        </body>
    
    </html>
  `;
}

function serverRenderer(data, req, res) {
    const context = {};
    let initStore = {
        movies: {
            movies: [],
            searchBy: 'genre',
            sortBy: '',
            search: '',
            limit: 10,
            total: 0,
            isLoading: false
        },
        movie: {
            movie: {},
            isLoading: false,
            error: null
        }
    };

    initStore = setDataToState(data, initStore);

    const configureStore = store(initStore);
    const app = (
        <Provider store={configureStore}>
            <StaticRouter
                location={req.url}
                context={context}>
                <App />
            </StaticRouter>
        </Provider>
    );
    const htmlString = renderToString(app);
    const preloadedState = configureStore.getState();

    res.send(renderHTML(htmlString, preloadedState));
}

function setDataToState(data, initStore) {
    switch (data.api) {
        case 'movies':
            initStore.movies.movies = data.data;
            initStore.movies.total = data.total;
            break;

        case 'movie':
            initStore.movie.movie = data.data;
            break;
    }

    return initStore;
}

router.get('/movies', function(req, res, next) {
    const param = queryString.parse(req.url);

    api.getMovies(param).then((data) => {
        data.api = 'movies';

        serverRenderer(data, req, res)
    });
});

router.get('/movie/:id', function(req, res, next) {
    const id = req.params.id;

    api.getMovie(id).then((data) => {
        data.api = 'movie';

        serverRenderer(data, req, res)
    });
});

export default () => router;