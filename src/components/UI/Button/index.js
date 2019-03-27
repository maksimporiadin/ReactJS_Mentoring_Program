import React from "react";
import './style.css';

export const Button = ({ className, disabled, onClick, children}) => (
    <button className={`btn button--default ${className}`}
            disabled={disabled}
            onClick={onClick}>
        {children}
    </button>
);


