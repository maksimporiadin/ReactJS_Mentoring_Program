import WithErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler';
import  MainPage from './MainPage';
import { doMoviesInitAction, doMoviesChangeSearchAction, doMoviesChangeSearchQueryAction, doMoviesChangeSortAction, doSortingMoviesAction } from '../../store/actions/index';
import { connect } from 'react-redux';
import { compose } from 'redux';

const mapStateToProps = state => {
    return {
        loading: state.movies.isLoading,
        movies: state.movies.movies,
        total: state.movies.total,
        searchBy: state.movies.searchBy,
        sortBy: state.movies.sortBy,
        limit: state.movies.limit
    }
};

const withConnect = connect(mapStateToProps, { doMoviesInitAction, doMoviesChangeSearchAction, doMoviesChangeSortAction, doSortingMoviesAction, doMoviesChangeSearchQueryAction });

export default compose(
    WithErrorHandler,
    withConnect
)(MainPage);