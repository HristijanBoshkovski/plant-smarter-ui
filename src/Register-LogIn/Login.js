import React, { useEffect } from "react";
import { useState } from "react";
import { Button } from "../components/Common/Forms/Button";

import "./Reg-login.css"

import Input from "../components/Common/Forms/Input"
import { NavLink, Navigate } from "react-router-dom";
import { validateEmail } from "../common";
import { useUserAuth } from "../CustomHooks/useUserAuth";
import { UsersAPI } from "../Api";
import Nav from "../Router/Nav";
import Info from "../components/Common/Info/Info";

const LoginJSX = props => (
    <div>
        <div className="register-container">
            <div className="log-navbar"><Nav /></div>
            <div className="reg-text">
                <h1>Log In to Your Account</h1>
                <h3>You haven't joined us yet? <NavLink to="/register">Register Here</NavLink></h3>
            </div>
            <div className="reg-form">
                <Input
                    placeholder="Username or E-mail"
                    name="auth"
                    type="text"
                    value={props.user.auth}
                    styleClass="form-style"
                    onChange={e => props.handleChange(e)}
                />
                <Input
                    placeholder="Password"
                    name="password"
                    type="password"
                    value={props.user.password}
                    styleClass="form-style"
                    onChange={e => props.handleChange(e)}
                />
                {props.submitHandler.submitted === false ?
                    <Button onClick={e => props.handleSubmit(e)} value="Log In" type="Submit" styleClass="btns btns-submit" /> :
                    <Info type={props.submitHandler.type} message={props.submitHandler.message} />
                }
            </div>
        </div>

    </div>
)

const Login = props => {
    const [user, setUser] = useState({ auth: "", password: "" })
    const [submitHandler, setSubmitHandler] = useState({
        submitted: false, type: "idle", message: ""
    })

    const [redirect, setRedirect] = useState(false)
    const [_user, login, logout] = useUserAuth()
    
    const handleChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
        setSubmitHandler({ submitted: false, type: "idle", message: "" })
    }
    const handleSubmit = async e => {
        e.preventDefault()

        setSubmitHandler({ type: "pending", message: "Logging in... Please wait.", submitted: true })

        const form = new FormData()
        if (validateEmail(user.auth) === null) form.append("username", user.auth)
        else form.append("email", user.auth)
        form.append("password", user.password)


        UsersAPI.login(form)
            .then(res => {
                login(res)
                setRedirect("/profile/" + _user.user.id)
            })
            .catch(error => setSubmitHandler({ type: "error", message: error.message, submitted: true }))

    }

    return redirect === false ? <LoginJSX submitHandler={submitHandler} user={user} handleChange={handleChange} handleSubmit={handleSubmit} /> : <Navigate to={redirect} />
}

export default Login;