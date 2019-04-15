import React, { Component } from 'react';
import { Modal }  from '../../components/UI';
import axios from '../../axios';


const WithErrorHandler = (WrappedComponent) => {
    const WithErrorHandlerClass = class extends Component {
        state = {
            error: null,
        }

        componentWillMount () {
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({ error: null });
                return req;
            });
            this.resInterceptor = axios.interceptors.response.use(res => res, err => {
                this.setState({ error: err });
            })
        }

        componentWillUnmount () {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        errorConfirmedHandler = () => {
            this.setState({ error: null });
        };

        render () {
            return (
                <React.Fragment>
                    <Modal
                        show={ this.state.error }
                        closeModal={ this.errorConfirmedHandler }>
                        { this.state.error ? this.state.error.message : null }
                    </Modal>
                    <WrappedComponent { ...this.props } />
                </React.Fragment>
            );
        }
    }

    return WithErrorHandlerClass;
}

export default WithErrorHandler;
