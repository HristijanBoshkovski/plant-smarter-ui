import React from "react";

import "./Scoreboard.css"

export const Scoreboard = ({
    person,
    trees,
    donations
}) => {

    return (

        <div className="board">
            <div className="name-person">
                <h3>{person}</h3>
            </div>
            <div className="scores">
                <span className="material-icons-outlined">forest</span><h3>{trees}</h3>
                <span className="material-icons-outlined">paid</span><h3>{donations}</h3>
            </div>
        </div>

    )

};
