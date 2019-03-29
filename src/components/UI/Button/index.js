import React from "react";
import './style.css';

export const Button = ({ className, disabled, onClick, name }) => (
    <button className={`btn button--default ${className}`}
            disabled={disabled}
            onClick={onClick}>
        {name}
    </button>
);


