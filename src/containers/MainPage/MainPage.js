import React, { Component } from 'react';

import { SEARCH_BY, SORT_BY } from "../../App.constants";
import { Header, FilterHeader, MainLayout, Movies, InformPanel, SortBy } from "../../components";
import { Spinner } from "../../components/UI";
import Auxe from '../../hoc/Auxe/Auxe';
import MoviesInform from './MoviesInform/MoviesInform';

import axios from '../../axios';

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

        this.setState({
            movies: sortedMovies
        })
    }

    handlerSetFilter = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    }

    handlerSetSearchBy = (event) => {
        this.setState({
            searchBy: event.target.value
        })
    }

    handlerSetSortBy = (event) => {
        this.setState({
            sortBy: event.target.value
        })
    }

    handlerSubmit = (event) => {
        event.preventDefault();

        this.setState({
            isLoading: true
        });

        const moviesData = {
            params: {
                search: this.state.inputValue,
                searchBy: this.state.searchBy,
                limit: this.state.limit
            }
        };

        axios.get('/movies', moviesData)
            .then( res => {
                this.setState({
                    movies: res.data.data,
                    isLoading: false,
                    total: res.data.total
                });
                console.log('get data', res);
            })
            .catch(error => {
                this.setState({
                    isLoading: false
                });

                return error;
            });

    }

    render() {
        return (
            <Auxe>
                <MainLayout>
                    <Header isShowSearchButton={this.state.isShowSearchButton}>
                        <FilterHeader
                            searchBy={this.state.searchBy}
                            inputValue={this.state.inputValue}
                            onFilterChange={this.handlerSetFilter}
                            onChangeSearchBy={this.handlerSetSearchBy}
                            onSubmitRequest={this.handlerSubmit} />
                    </Header>
                    < InformPanel>
                        <MoviesInform
                            count={this.state.total} >

                            <SortBy
                                sortBy={this.state.sortBy}
                                onChange={this.handlerSetSortBy} />
                        </MoviesInform>
                    </InformPanel>
                    { this.state.isLoading ? <Spinner /> : <Movies movies={this.state.movies} /> }
                </MainLayout>
            </Auxe>

        );
    }


}

export default MainPage;

