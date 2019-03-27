import React from 'react';

import './MoviesInform.css';

const MoviesInform = ({ count, children }) => (
    <div className="moviesInform">
        <div className="moviesInform__count">
            {(() => {
                switch (count) {
                    case 0: return null
                    case 1: return <span> {count} movie found</span>
                    default: return <span> {count} movies found</span>
                }
            })()}
        </div>
        <div className="moviesInform__sortBy">
            { children }
        </div>
    </div>
);

export default MoviesInform;
