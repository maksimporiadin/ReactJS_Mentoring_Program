import React, { Component } from 'react';

import { Header, MainLayout, Movies, InformPanel, MovieDetails } from '../../components';
import { isEmpty } from '../../shared/utilityMethods';

class MoviePage extends Component {
    state = {
        isShowSearchButton: true,
    }

    componentDidMount() {
        this.uploadMovie();
    }

    componentDidUpdate(prevProps, prevState) {
        if( prevProps.match.params.movieId !== this.props.match.params.movieId ) {
            this.uploadMovie();
        }
    }

    uploadMovie() {
        const id = this.props.match.params.movieId;
        this.props.doMovieInitAction(id);
    }

    render() {
        return (
            <MainLayout>
                <Header isShowSearchButton={ this.state.isShowSearchButton }>
                    <MovieDetails movie={ this.props.movie } loading={ this.props.isLoading }/>
                </Header>
                < InformPanel>
                    {
                        !isEmpty(this.props.movie) &&
                        <div>{`Films by ${this.props.movie.genres.join(' & ')} genre`}</div>
                    }
                </InformPanel>
                    <Movies movies={ this.props.movies } />
            </MainLayout>
        );
    }

}

export default MoviePage;

