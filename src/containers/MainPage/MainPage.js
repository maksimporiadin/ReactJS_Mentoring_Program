import React, { Component } from 'react';

import { BASE_URL, SEARCH_BY } from "../../App.constants";
import { Header, FilterHeader, MainLayout, NoFilmsFound } from "../../components";
import Auxe from '../../hoc/Auxe/Auxe';

class MainPage extends Component {
    state = {
        movies: [],
        searchBy: SEARCH_BY.TITLE,
        inputValue: '',
        isShowSearchButton: false
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

        console.log('get data');
        this.setState({
            inputValue: ''
        })

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
                    <NoFilmsFound />
                </MainLayout>
            </Auxe>

        );
    }


}

export default MainPage;

