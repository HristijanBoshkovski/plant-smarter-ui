import React from "react";
import Nav from "../Router/Nav";
import { Card } from "./Card";

import BusinessMan from "../static/businessman.jpg"
import Plant from "../static/plant.jpg"
import School from "../static/school.jpg"

import './Joinus.css'
import Paragraph from "./Paragraph"
import Footer from "../Router/Footer"

function Joinus() {
    return(
        <div className="join-us-container">
            <div className="navbar">
            <Nav/>
            </div>
            <div className="heading-joinus">
                <h1>TO REGISTER AND JOIN OUR TEAM CLICK BELOW ON ONE OF THE CATEGORIES AND START PLANTING TREES</h1>
                <h3>You already have an account? <a href="#0">Sign in now!</a></h3>
            </div>
            <div className="cards">
                <Card picture={BusinessMan} value="Business" altText="business-man-card" linkRef="#business-par"/>
                <Card picture={Plant} value="Individuals" altText="individuals-card" linkRef="#individuals-par"/>
                <Card picture={School} value="School" altText="schools-card" linkRef="#schools-par"/>
            </div>
            <div className="learn-more">
                <Paragraph/>
            </div>
            <div className="ju-footer"><Footer/></div>
        </div>
    )
}

export default Joinus;