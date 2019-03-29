import React, { Component } from 'react';
import  Routers from './Routers';
import { withRouter} from 'react-router';

import './styles/normalize.css';
import './styles/custom.css';

class App extends Component {
    render() {
        return (
           <Routers />
        );
    }
}

export default withRouter(App);