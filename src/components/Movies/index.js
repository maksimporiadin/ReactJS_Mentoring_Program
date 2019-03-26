import React from 'react';

import './style.css';
import Movie from './Movie';
import { NoFilmsFound } from '../';

export const Movies = ({ movies }) => (
    <div className="movies-container">
        {
            movies.length ? movies.map((movie, i) => (
                <Movie key={i} movie={movie}/>
            )) : <NoFilmsFound />
        }
    </div>
);
