import React from 'react';
import { Route, Switch, Redirect } from 'react-router';

import MainPage from './containers/MainPage';
import MoviePage from './containers/MoviePage';

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
                    path='/movies/:movieId'
                />
                <Route path='/'
                       render={() => <Redirect to='/movies'/>}
                />
            </Switch>
        );
}

export default Routers;