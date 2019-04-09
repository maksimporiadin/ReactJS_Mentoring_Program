import React from 'react';

import './style.css';

export const Spinner = ({color = '#fff'}) => (
    <div className="Loader" style={ { backgroundColor: color } }>Loading...</div>
);