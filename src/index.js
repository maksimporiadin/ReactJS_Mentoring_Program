import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';

import App from "./App";

const app = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

const rootElement = document.getElementById("root");

ReactDOM.render(app, rootElement);