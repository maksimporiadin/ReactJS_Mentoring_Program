import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from "./App";

import store from './store';

function renderHTML(html) {
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
            <script src="/js/main.js"></script>
        </body>
    
    </html>
  `;
}

export default function serverRenderer() {
    return (req, res) => {
        const context = {};
        const app = (
            <Provider store={store}>
                <StaticRouter
                    location={req.url}
                    context={context}>
                    <App />
                </StaticRouter>
            </Provider>
        );

        const htmlString = renderToString(app);

        if (context.url) {
            res.writeHead(302, {
                Location: context.url,
            });
            res.end();
            return;
        }

        res.send(renderHTML(htmlString));
    };
}