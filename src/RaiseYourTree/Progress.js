import React from "react";

import { Button } from "../components/Common/Forms/Button";

import "./Progress.css"

function Progress() {
    return (
        <div className="progress-container">
            <h2>YOUR PROGRESS</h2>
            <div className="donate">
                <div className="progress-bar">
                    <div className="statistics">
                        <h6>Trees Planted</h6>
                        <h3>5</h3>
                        <h6>Donations</h6>
                        <h3>1.500MKD</h3>
                    </div>
                    <div className="loader">
                        <div className="pie animate no-round" style={{ "--p": 80, "--c": "#13463D" }}> 80%</div>
                        <h4>NEXT TREE</h4>
                    </div>
                </div>
                <Button styleClass={"btns btn-donate"} value={"DONATE"} />
            </div>
        </div>
    )
}

export default Progress;