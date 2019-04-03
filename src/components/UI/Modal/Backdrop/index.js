import React from 'react';
import './style.css';

const Backdrop = ({ show, close }) => (
    show ? <div className="backdrop" onClick={close}></div> : null
);

export default Backdrop;