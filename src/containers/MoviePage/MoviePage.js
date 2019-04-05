import React, { Component } from 'react';

import { Header, MainLayout, Movies, InformPanel, MovieDetails, NoFilmsFound } from '../../components';
import { Spinner } from '../../components/UI';
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

        this.props.onGetMovie(id);
    }

    render() {
        const movie = !isEmpty(this.props.movie) ? <MovieDetails movie={ this.props.movie }/> : null;

        return (
            <MainLayout>
                <Header isShowSearchButton={ this.state.isShowSearchButton }>
                    {
                        this.props.isLoading ? <Spinner /> : movie
                    }
                </Header>
                < InformPanel>
                    {
                        !isEmpty(this.props.movie) &&
                        <div>{`Films by ${this.props.movie.genres.join(' & ')} genre`}</div>
                    }
                </InformPanel>
                { this.props.movies.length ? <Movies movies={ this.props.movies } /> : <NoFilmsFound /> }
            </MainLayout>
        );
    }

}

export default MoviePage;

