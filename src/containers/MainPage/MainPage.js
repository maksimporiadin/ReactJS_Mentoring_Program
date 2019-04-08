import React, { Component } from 'react';
import { Header, FilterHeader, MainLayout, Movies, InformPanel, SortBy } from "../../components";
import MoviesInform from './MoviesInform';

class MainPage extends Component {
    state = {
        inputValue: '',
        isShowSearchButton: false,
    }

    componentDidUpdate(prevProps) {
        if (prevProps.sortBy !== this.props.sortBy) {
            this.props.onSortingMovies(this.props.movies, this.props.sortBy);
        }
    }

    handlerSetFilter = (event) => {
        this.setState({ inputValue: event.target.value });
    }

    handlerSetSearchBy = (event) => {
        this.props.onMoviesChangeSearch(event.target.value);
    }

    handlerSetSortBy = (event) => {
        this.props.onMoviesChangeSort(event.target.value);
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

        this.props.onGetMovies(moviesData);
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