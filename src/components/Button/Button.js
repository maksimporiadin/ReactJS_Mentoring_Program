import React from "react";

const button = props => (
    <button
        style={{ margin: "0 10px" }}
        className={props.styling}
        disabled={props.disabled}
        onClick={props.clicked}
    >
        {props.children}
    </button>
);

export default button;
