import React from 'react';

import './style.css';

import { Button } from '../UI';

export const NotFound = () => (
    <div className="notFound-container">
        Page doesn`t Found
        <Button name='Back to Main Page'
                onClick={() => window.location = '/'}>
            Back to Main Page
        </Button>
    </div>
);