import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../components/Common/Forms/Button";

import Input from "../components/Common/Forms/Input"
import Info from "../components/Common/Info/Info";

import "../components/Common/Radio.css"
import Nav from "../Router/Nav";

const RegisterJSX = ({
    user,
    handleChange,
    handleSubmit,
    submitHandler
}) => (
    <div className="register-container">
        <div className="navbar-reg"><Nav /></div>
        <div className="reg-text">
            <h4>START FOR FREE</h4>
            <h1>Create a new account</h1>
            <h3>Already a member? <NavLink to="/login">Login Here</NavLink></h3>
        </div>
        <div className="reg-form">
            <div className="form-container">
                <Input
                    placeholder="First Name"
                    name="firstname"
                    type="text"
                    value={user.firstname}
                    styleClass="form-style"
                    onChange={e => handleChange(e)}
                />
                <Input
                    placeholder="Last Name"
                    name="lastname"
                    type="text"
                    value={user.lastname}
                    styleClass="form-style"
                    onChange={e => handleChange(e)}
                />
                <Input
                    placeholder="E-mail"
                    name="email"
                    type="email"
                    value={user.email}
                    styleClass="form-style"
                    onChange={e => handleChange(e)}
                />
                <Input
                    placeholder="Userame"
                    name="username"
                    type="text"
                    value={user.username}
                    styleClass="form-style"
                    onChange={e => handleChange(e)}
                />
                <Input
                    placeholder="Password"
                    name="password"
                    type="password"
                    value={user.password}
                    styleClass="form-style"
                    onChange={e => handleChange(e)}
                />
                <Input
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    value={user.confirmPassword}
                    styleClass="form-style"
                    onChange={e => handleChange(e)}
                />
                {/* <div className="radio-button">
                        <Radio
                            radioButtons={userType}
                            name="type"
                            onChange={e => handleChange(e)}
                        />
                    </div> */}
                {submitHandler.submitted === false ?
                    <Button onClick={e => handleSubmit(e)} value="Register" type="Submit" styleClass="btns btns-submit" /> :
                    // <span className={"info " + submitHandler.type}> <p>{submitHandler.message}</p> </span>
                    <Info type={submitHandler.type} message={submitHandler.message} />
                }
            </div>
        </div>
    </div>
)

export default RegisterJSX;