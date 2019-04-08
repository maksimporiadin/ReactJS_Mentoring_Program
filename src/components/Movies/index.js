import React from 'react';

import './style.css';
import Movie from './Movie';
import { NoFilmsFound } from '../';
import { Spinner } from '../../components/UI';

export const Movies = ({ movies , loading}) => {
    if( loading ) {
        return <Spinner />;
    }

    return (
    <div className="movies-container">
        {
            movies.length ? movies.map((movie, i) => (
                <Movie key={i} movie={movie}/>
            )) : <NoFilmsFound />
        }
    </div>
)};
