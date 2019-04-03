import React, { Component } from 'react';
import { Redirect  } from 'react-router';

import { Button, Logo } from '../UI';

import './style.css';

class Header extends Component {
    state = {
        isClicked: false
    }

    HandlerOnClick = () => {
        this.setState({ isClicked: true });
    }

    render () {
        return (
            <header className="header">
                {
                    this.state.isClicked &&
                    <Redirect push to="/movies" />
                }
                <div className="header-logo">
                    <Logo/>
                    {
                        this.props.isShowSearchButton &&
                        <Button
                            className="btn-primary header-search-button"
                            onClick={this.HandlerOnClick}
                            name="Search">
                        </Button>
                    }
                </div>
                {this.props.children}
            </header>
        );
    }
}

export default Header;
