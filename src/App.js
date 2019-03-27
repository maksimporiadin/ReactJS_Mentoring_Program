import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router';

import './styles/normalize.css';
import './styles/custom.css';

import MainPage from './containers/MainPage';
import MoviePage from './containers/MoviePage';

class App extends Component {
    render() {
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
}

export default withRouter(App);