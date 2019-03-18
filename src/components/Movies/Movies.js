import React from 'react';

import Movie from './Movie/Movie';
import { NoFilmsFound } from '../';

import './Movies.css';

export const Movies = ({ movies }) => (
    <div className="movies-container">
        {
            movies.length ? movies.map((movie, i) => (
                <Movie key={i} movie={movie}/>
            )) : <NoFilmsFound />
        }
    </div>
);
