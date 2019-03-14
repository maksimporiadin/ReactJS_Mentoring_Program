import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import AddPerson from './containers/AddPerson/AddPerson';
import "./index.css";

class App extends Component {
    render() {
        const title = React.createElement("h1", null, "Hello dear friend!");

        return (
            <div className="App">
                <div>
                    <Link to="/"> Greading </Link> |
                    <Link to="/users"> Results </Link>
                </div>

                <Route path="/" exact render={() => title} />
                <Route path="/users" exact component={AddPerson} />

            </div>
        );
    }
}

export default App;