import React from 'react';

import { Footer } from '../';

import './style.css';

export const MainLayout = ({ children }) => (
    <div className="main-layout-container">
        <div className="main-layout-content">
            {children}
        </div>
        <Footer />
    </div>
);