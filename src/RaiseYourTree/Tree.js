import React from "react";
import { Button } from "../components/Common/Forms/Button";
import NavBlack from "../Router/NavBlack";
import { useNavigate } from "react-router-dom"

import "./Tree.css"
import Progress from "./Progress";

function Tree() {

    let navigate = useNavigate();

    return (
        <div className="tree-container">
            <div className="hero-tree">
                <NavBlack />
                <div className="hero-text">
                    <h1>RAISE YOUR TREE</h1>
                    <h3>Now is the time to take action. PLANT A TREE TODAY!</h3>
                    <Button value={"JOIN US"} styleClass={"btns btn-hero"} onClick={() => navigate('/joinus')}></Button>
                </div>
            </div>
            
            <div className="prog">
                    <Progress />
                </div>
        </div>
    )
}

export default Tree;