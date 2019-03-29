import React, { Component } from 'react';

import { Header, MainLayout, Movies, InformPanel, MovieDetails } from "../../components";
import { Spinner } from "../../components/UI";
import api from "../../api";

class MoviePage extends Component {
    state = {
        movies: [],
        movie: {},
        isShowSearchButton: true,
        isLoading: false,
        isMovieLoaded: false
    }

    componentDidMount() {
        // this.uploadMovies(); will be removed after moving movies data to redux store.
        this.uploadMovies();
        this.uploadMovie();
    }

    componentDidUpdate(prevProps, prevState) {
        if( prevProps.match.params.movieId !== this.props.match.params.movieId ) {
            this.uploadMovie();
        }
    }

    async uploadMovies()  {
        this.setState({ isLoading: true });

        const response = await api.getMovies({});

        this.setState({ movies: response.data.data, isLoading: false });
    }

    async uploadMovie() {
        const moviesData = this.props.match.params.movieId;
        const response = await api.getMovie(moviesData);

        this.setState({ movie: response.data, isMovieLoaded: true });
    }

    render() {
        return (
            <MainLayout>
                <Header isShowSearchButton={ this.state.isShowSearchButton }>
                    {
                        this.state.isMovieLoaded &&
                        <MovieDetails movie={ this.state.movie }/>
                    }
                </Header>
                < InformPanel>
                    {
                        this.state.isMovieLoaded &&
                        <div>{`Films by ${this.state.movie.genres.join(' & ')} genre`}</div>
                    }
                </InformPanel>
                { this.state.isLoading ? <Spinner /> : <Movies movies={ this.state.movies } /> }
            </MainLayout>
        );
    }

}

export default MoviePage;

