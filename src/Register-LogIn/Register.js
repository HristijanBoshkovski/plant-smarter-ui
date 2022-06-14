import React from "react";
import Radio from "../components/Common/Forms/Radio";

import Nav from "../Router/Nav"
import Form from "./Form";

import "./Reg-login.css"

export const Register=({
    value,
    linkValue
}) => {
    

    return(
        <div className="register-container">
            <div className="navbar-reg"><Nav/></div>
            <div className="reg-text">
                <h4>START FOR FREE</h4>
                <h1>Create a new account</h1>
                <h3>Already a member? <a href="#0">Login Here</a></h3>
            </div>
            <div className="reg-form">
                <Form/>
            </div>
            
        </div>
    )
};