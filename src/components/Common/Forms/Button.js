import React from "react";
import "./Button.css";

export const Button = ({
    value, 
    type, 
    onClick,
    styleClass
}) => {

    return (
        <button className={styleClass} onClick={onClick} type={type}>
            {value}
        </button>
    )

};
