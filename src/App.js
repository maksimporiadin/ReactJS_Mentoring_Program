import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import './styles/normalize.css';

import { Button, Input, Logo } from './components/UI';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div>
                    <Link to="/"> Greading </Link> |
                    <Link to="/users"> Results </Link>
                </div>
                <Button>Search</Button>
                <Input
                    placeholder='searching film'
                    className="form-control"/>
                <Logo />
            </div>
        );
    }
}

export default App;