import React, { Component } from 'react';

import { SEARCH_BY } from "../../App.constants";
import { Header, FilterHeader, MainLayout, Movies } from "../../components";
import Auxe from '../../hoc/Auxe/Auxe';

import axios from '../../axios';

class MainPage extends Component {
    state = {
        movies: [],
        searchBy: SEARCH_BY.TITLE,
        inputValue: '',
        isShowSearchButton: false,
        limit: 15
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

    handlerSubmit = (event) => {
        event.preventDefault();

        const moviesData = {
            params: {
                search: this.state.inputValue,
                searchBy: this.state.searchBy,
                limit: this.state.limit
            }
        };

        console.log('get data');

        axios.get('/movies', moviesData)
            .then( res => {
                this.setState({
                    movies: res.data.data
                });
                console.log('get data', res);
            })
            .catch(error => error);

    }

    render() {
        return (
            <Auxe>
                <Header isShowSearchButton={this.state.isShowSearchButton}>
                    <FilterHeader
                        searchBy={this.state.searchBy}
                        inputValue={this.state.inputValue}
                        onFilterChange={this.handlerSetFilter}
                        onChangeSearchBy={this.handlerSetSearchBy}
                        onSubmitRequest={this.handlerSubmit}/>
                </Header>
                <MainLayout>
                    <Movies movies={this.state.movies} />
                </MainLayout>
            </Auxe>

        );
    }


}

export default MainPage;

