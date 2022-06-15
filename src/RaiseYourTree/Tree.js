import React from "react";
import { Button } from "../components/Common/Forms/Button";
import NavBlack from "../Router/NavBlack";
import { useNavigate } from "react-router-dom"
import Footer from "../Router/Footer";

import "./Tree.css"
import Progress from "./Progress";
import { Scoreboard } from "./Scoreboard";

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

            <div className="score-board">
                <h2>LEADBOARD</h2>
                <Scoreboard person={"Person1"} trees={"18"} donations={"6.125MKD"}/>
                <Scoreboard person={"Person1"} trees={"15"} donations={"5.900MKD"}/>
                <Scoreboard person={"Person1"} trees={"15"} donations={"4.500MKD"}/>
                <Scoreboard person={"Person1"} trees={"14"} donations={"4.500MKD"}/>
                <Scoreboard person={"Person1"} trees={"12"} donations={"4.000MKD"}/>
            </div>

            <div className="footer-container">
                <Footer />
            </div>
        </div>
    )
}

export default Tree;