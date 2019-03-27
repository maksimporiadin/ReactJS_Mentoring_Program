import React, { Component } from 'react';

import Auxe from '../../../hoc/Auxe/Auxe';
import './style.css';
import Backdrop from './Backdrop';

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    render () {
        return (
            <Auxe>
                <Backdrop show={this.props.show} close={this.props.closeModal}/>
                <div
                    className="modal-custom"
                    onClick={this.props.closeModal}
                    style={{
                         transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                         opacity: this.props.show ? '1' : '0'
                     }}>
                    {this.props.children}
                </div>
            </Auxe>
        )
    }
}

export default Modal;
