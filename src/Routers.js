import React from 'react';
import { Route, Switch, Redirect } from 'react-router';

import MainPage from './containers/MainPage';
import MoviePage from './containers/MoviePage';
import ErrorPage from './containers/ErrorPage';

const Routers = () => {
        return (
            <Switch>
                <Route
                    exact
                    component={MainPage}
                    path='/movies'
                />
                <Route
                    exact
                    component={MoviePage}
                    path='/movie/:movieId'
                />
                <Route
                    path='/'
                    component={ErrorPage}
                />
            </Switch>
        );
}

export default Routers;