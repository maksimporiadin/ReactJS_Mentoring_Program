import MoviePage from './MoviePage';
import WithErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler';
import { doMovieInitAction } from '../../store/actions';
import { connect } from 'react-redux';
import { compose } from 'redux'

const mapStateToProps = state => ({
    isLoading: state.movie.isLoading,
    movie: state.movie.movie,
    movies: state.movies.movies,
});

const withConnect = connect(mapStateToProps, { doMovieInitAction })

export default compose(
  WithErrorHandler,
  withConnect
)(MoviePage)



