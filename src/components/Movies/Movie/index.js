// @flow

import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

type MovieProps = {
    movie: Object;
}

const Movie = (props: MovieProps) => {
    const { movie } = props;

    return (
    <div className="movie-container">
        <div className="movie-content">
            <img className="movie-poster"
                 src={movie.poster_path}
                 alt={movie.title} />
            <div className="movie-description-content">
                <div className="movie-description-link">
                    <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
                </div>
                <div className="movie-description-date">
                    <span>{movie.release_date.slice(0, 4)}</span>
                </div>
                <div className="movie-description-gentes">{`${movie.genres.join(' & ')} Movie`}</div>
            </div>
        </div>
    </div>
)};

export default Movie;