import React from "react";

import "./Progress.css"

function Progress(){
    return(
        <div className="progress-container">
            <h2>YOUR PROGRESS</h2>
            <div className="statistics">
                <h6>Trees Planted</h6>
                <h3>5</h3>
                <h6>Donations</h6>
                <h3>1.500MKD</h3>
            </div>
        </div>
    )
}

export default Progress;