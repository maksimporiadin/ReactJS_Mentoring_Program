import React from 'react';

import { Spinner } from '../../components/UI';
import { isEmpty } from '../../shared/utilityMethods';

import './style.css';

export const MovieDetails = ({movie, loading}) => {
    if( loading ) {
        return <Spinner />;
    }

    if( isEmpty(movie) ) {
        return null;
    };

    return (
        <div className="movie-details-container">
            <div className="movie-details-poster">
                <img className="movie-details-img"
                     src={movie.poster_path}
                     alt={movie.title} />
            </div>
            <div className="movie-details-inform">
                <h1 className="movie-details-title">{movie.title}</h1>
                <h5>{movie.tagline}</h5>
                <div className="movie-details-tracks"><span>{movie.release_date.slice(0, 4)}</span><span>{movie.runtime} min</span></div>
                <div>{movie.overview}</div>

            </div>
        </div>
    );
};