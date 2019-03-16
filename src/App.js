import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import './styles/normalize.css';
import './styles/custom.css';

import { Button, Input, Logo } from './components/UI';
import {  NotFound, NoFilmsFound, Header, MainLayout } from './components';
import Auxe from './hoc/Auxe/Auxe';
import MainPage from './containers/MainPage/MainPage';

class App extends Component {
    render() {
        return (
            <Auxe>
                <MainPage />
            </Auxe>
        );
    }
}

export default App;