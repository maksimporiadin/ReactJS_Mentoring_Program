import React, { Component } from 'react';

import { Header, MainLayout, NotFound } from '../../components/index';

class ErrorPage extends Component {
    state = {
        isShowSearchButton: true,
    }

    render() {
        return (
            <MainLayout>
                <Header isShowSearchButton={ this.state.isShowSearchButton } />
                <NotFound />
            </MainLayout>
        );
    }
}

export default ErrorPage;
