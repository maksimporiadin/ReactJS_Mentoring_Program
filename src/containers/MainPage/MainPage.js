import React, { Component } from 'react';

import { BASE_URL, SEARCH_BY } from "../../App.constants";
import { Header, FilterHeader, MainLayout, NoFilmsFound } from "../../components";
import Auxe from '../../hoc/Auxe/Auxe';

class MainPage extends Component {
    state = {
        movies: [],
        searchBy: SEARCH_BY.TITLE,
        inputValue: ''
    }

    handlerSetFilter = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    }

    render() {
        return (
            <Auxe>
                <Header isShowSearchButton="false">
                    <FilterHeader
                        searchBy={this.state.searchBy}
                        onFilterChange={this.handlerSetFilter}/>
                </Header>
                <MainLayout>
                    <NoFilmsFound />
                </MainLayout>
            </Auxe>

        );
    }


}

export default MainPage;

