import React, { Component } from 'react';
import queryString from  'query-string';
import { Header, FilterHeader, MainLayout, Movies, InformPanel, SortBy } from "../../components";
import MoviesInform from './MoviesInform';

class MainPage extends Component {
    state = {
        inputValue: '',
        isShowSearchButton: false,
    }

    componentDidMount() {
        const param = queryString.parse(this.props.location.search);

        param.searchBy &&
            this.props.doMoviesChangeSearchAction(param.searchBy);

        if (param.search) {
            this.setState({ inputValue: param.search });
            this.props.doMoviesInitAction({
                params: {
                    search: param.search,
                    searchBy: param.searchBy ? param.searchBy : this.props.searchBy,
                    limit: this.props.limit
                }
            });
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.sortBy !== this.props.sortBy) {
            this.props.doSortingMoviesAction({ movies: this.props.movies, sortBy: this.props.sortBy });
        }
    }

    handlerSetFilter = (event) => {
        this.setState({ inputValue: event.target.value });
    }

    handlerSetSearchBy = (event) => {
        this.props.doMoviesChangeSearchAction(event.target.value);
    }

    handlerSetSortBy = (event) => {
        this.props.doMoviesChangeSortAction(event.target.value);
    }

    handlerSubmit = (event) => {
        event.preventDefault();

        this.getMovies();
    }

    getMovies() {
        const moviesData = {
            params: {
                search: this.state.inputValue,
                searchBy: this.props.searchBy,
                limit: this.props.limit
            }
        };

        this.saveQuery();

        this.props.doMoviesInitAction(moviesData);
    }

    saveQuery() {
        const searchQueryString = `?${queryString.stringify({ search: this.state.inputValue , searchBy: this.props.searchBy })}`;

        this.props.history.push({
            pathname: this.props.location.pathname,
            search: searchQueryString
        });

        this.props.doMoviesChangeSearchQueryAction(searchQueryString);
    }

    render() {
        return (
            <MainLayout>
                <Header isShowSearchButton={this.state.isShowSearchButton}>
                    <FilterHeader
                        searchBy={this.props.searchBy}
                        inputValue={this.state.inputValue}
                        onFilterChange={this.handlerSetFilter}
                        onChangeSearchBy={this.handlerSetSearchBy}
                        onSubmitRequest={this.handlerSubmit} />
                </Header>
                <InformPanel>
                    <MoviesInform
                        count={this.props.total} >

                        <SortBy
                            sortBy={this.props.sortBy}
                            onChange={this.handlerSetSortBy} />
                    </MoviesInform>
                </InformPanel>
                <Movies movies={this.props.movies} loading={this.props.loading} /> }
            </MainLayout>
        );
    }

}

export default MainPage;