import React, { Component } from 'react';

import { SEARCH_BY, SORT_BY } from "../../App.constants";
import { Header, FilterHeader, MainLayout, Movies, InformPanel, SortBy } from "../../components";
import { Spinner } from "../../components/UI";
import api from "../../api";
import MoviesInform from './MoviesInform';

class MainPage extends Component {
    state = {
        movies: [],
        searchBy: SEARCH_BY.TITLE.value,
        sortBy: SORT_BY.RATING.value,
        inputValue: '',
        isShowSearchButton: false,
        limit: 10,
        total: 0,
        isLoading: false
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.sortBy !== this.state.sortBy) {
            this.sortingMovies();
        }
    }

    sortingMovies() {
        const sort = this.state.sortBy;
        const sortedMovies = this.state.movies.concat().sort((a, b) => a[sort] < b[sort] ? 1 : -1);

        this.setState({ movies: sortedMovies });
    }

    handlerSetFilter = (event) => {
        this.setState({ inputValue: event.target.value });
    }

    handlerSetSearchBy = (event) => {
        this.setState({ searchBy: event.target.value });
    }

    handlerSetSortBy = (event) => {
        this.setState({ sortBy: event.target.value });
    }

    handlerSubmit = (event) => {
        event.preventDefault();

        this.setState({ isLoading: true });

        this.getMovies();
    }

    async getMovies() {
        const moviesData = {
            params: {
                search: this.state.inputValue,
                searchBy: this.state.searchBy,
                limit: this.state.limit
            }
        };

        try {
            const responce = await api.getMovies(moviesData);

            this.setState({ movies: responce.data.data, isLoading: false, total: responce.data.total });
            this.sortingMovies();
        } catch (err) {
            this.setState({ isLoading: false });
        }
    }

    render() {
        return (
            <MainLayout>
                <Header isShowSearchButton={this.state.isShowSearchButton}>
                    <FilterHeader
                        searchBy={this.state.searchBy}
                        inputValue={this.state.inputValue}
                        onFilterChange={this.handlerSetFilter}
                        onChangeSearchBy={this.handlerSetSearchBy}
                        onSubmitRequest={this.handlerSubmit} />
                </Header>
                <InformPanel>
                    <MoviesInform
                        count={this.state.total} >

                        <SortBy
                            sortBy={this.state.sortBy}
                            onChange={this.handlerSetSortBy} />
                    </MoviesInform>
                </InformPanel>
                { this.state.isLoading ? <Spinner /> : <Movies movies={this.state.movies} /> }
            </MainLayout>
        );
    }


}

export default MainPage;