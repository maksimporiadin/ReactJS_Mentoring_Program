import React, { Component } from 'react';

import { Button, Logo } from '../UI';

import './header.css';

export const Header = ({ isShowSearchBtn, children }) => (
    <header className="header">
        <div className="header-logo">
            <Logo/>
            {
                isShowSearchBtn &&
                <Button class="header-search-button"
                        onClick={() => window.location = '/'}>
                    Search
                </Button>
            }
        </div>
        {children}
    </header>
);
