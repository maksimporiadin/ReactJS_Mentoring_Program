import MoviePage from './MoviePage';
import WithErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler';
import axios from '../../axios';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        isLoading: state.movie.isLoading,
        movie: state.movie.movie,
        movies: state.movies.movies,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onGetMovie: (id) => dispatch(actions.getMovie(id))
    };
};

export default WithErrorHandler(connect(mapStateToProps, mapDispatchToProps)(MoviePage), axios);

