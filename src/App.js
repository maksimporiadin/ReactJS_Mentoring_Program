import React, { Component } from 'react';
import  Routers from './Routers';
import { withRouter} from 'react-router';

import 'babel-polyfill';
import { hot } from 'react-hot-loader';

import './styles/normalize.css';
import './styles/custom.css';

class App extends Component {
    render() {
        return (
           <Routers />
        );
    }
}

export default hot(module)(withRouter(App));