import WithErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler';
import  MainPage from './MainPage';
import axios from '../../axios';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';


const mapStateToProps = state => {
    return {
        loading: state.movies.loading,
        movies: state.movies.movies,
        total: state.movies.total,
        searchBy: state.movies.searchBy,
        sortBy: state.movies.sortBy,
        limit: state.movies.limit
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onGetMovies: (params) => dispatch(actions.getMovies(params)),
        onMoviesChangeSearch: (search) => dispatch(actions.moviesChangeSearch(search)),
        onMoviesChangeSort: (sort) => dispatch(actions.moviesChangeSort(sort)),
        onSortingMovies: (movies, sort) => dispatch(actions.sortingMovies(movies, sort))
    };
};


export default WithErrorHandler(connect(mapStateToProps, mapDispatchToProps)(MainPage), axios);

