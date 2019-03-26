import React, { Component } from 'react';

import { SEARCH_BY, SORT_BY } from "../../App.constants";
import { Header, MainLayout, Movies, InformPanel } from "../../components";
import { Spinner } from "../../components/UI";
import api from "../../api";
import WithErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler';

import axios from '../../axios';

import { AuthContext } from '../MainPage';

class MoviePage extends Component {
    state = {
        movies: [],
        movie: {},
        isShowSearchButton: true,
        isLoading: false
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

    uploadMovies()  {
        this.setState({
            isLoading: true
        });

        const moviesData = {};

        api.getMovies(moviesData)
            .then( res => {
                this.setState({
                    movies: res.data.data,
                    isLoading: false,
                });
            });
    }

    uploadMovie = () => {
        this.setState({
            isLoading: true
        });

        const moviesData = this.props.match.params.movieId;

        api.getMovie(moviesData)
            .then( res => {
                this.setState({
                    movie: res.data,
                    isLoading: false,
                });
            });
    }

    render() {
        return (
            <MainLayout>
                <Header isShowSearchButton={this.state.isShowSearchButton}>
                </Header>
                < InformPanel>
                    {
                        this.state.movie.genres &&
                        <div>{`Films by ${this.state.movie.genres.join(' & ')} genre`}</div>
                    }
                </InformPanel>
                { this.state.isLoading ? <Spinner /> : <Movies movies={this.state.movies} /> }
            </MainLayout>
        );
    }

}

export default WithErrorHandler(MoviePage, axios);

