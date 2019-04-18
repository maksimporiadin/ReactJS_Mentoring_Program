import React, { Component } from 'react';
import { Redirect  } from 'react-router';
import { connect } from 'react-redux';

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
        const path = `/movies${this.props.search}`
        return (
            <header className="header">
                {
                    this.state.isClicked &&
                    <Redirect push to={path} />
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

const mapStateToProps = state => {
    return {
        search: state.movies.search,
    }
};

export default connect(mapStateToProps, null)(Header);
