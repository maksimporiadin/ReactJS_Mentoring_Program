import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from "./App";

import store from './store';

const configureStore = store(window.PRELOADED_STATE);

const app = (
    <Provider store={configureStore}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

const rootElement = document.getElementById("root");

hydrate(app, rootElement);