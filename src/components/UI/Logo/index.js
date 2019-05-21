import React from 'react';

import injectSheet from 'react-jss';

import './style.css';

const styles = {
    span: {
        color: '#ff0000'
    }
}

const Logo = ({classes}) => (
    <span className={classes.span}>Netﬂixroulette</span>
)

export default injectSheet(styles)(Logo);