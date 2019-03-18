import React, { Component } from 'react';

import { Button, Logo } from '../UI';

import './header.css';

export const Header = ({ isShowSearchButton, children }) => (
    <header className="header">
        <div className="header-logo">
            <Logo/>
            {
                isShowSearchButton &&
                <Button
                    className="btn-primary header-search-button"
                    onClick={() => window.location = '/'} >
                    Search
                </Button>
            }
        </div>
        {children}
    </header>
);
