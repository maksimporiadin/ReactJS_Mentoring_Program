import React from "react";
import './Button.css';

export const Button = ({ className, disabled, onClick, children}) => (
    <button className={`btn button--default btn-success ${className}`}
            disabled={disabled}
            onClick={onClick}>
        {children}
    </button>
);


