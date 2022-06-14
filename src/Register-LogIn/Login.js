import React from "react";
import { useState } from "react";
import { Button } from "../components/Common/Forms/Button";
import Nav from "../Router/Nav"

import "./Reg-login.css"

import Input from "../components/Common/Forms/Input"

const Login = props => {
    const [user, setUser] = useState({ username: "", password: "", email: "", selected: [] })

    return (
        <div>
            <div className="register-container">
                <div className="log-navbar"><Nav /></div>
                <div className="reg-text">
                    <h1>Log In to Your Account</h1>
                    <h3>You haven't joined us yet? <a href="/register">Register Here</a></h3>
                </div>
                <div className="reg-form">
                    <Input
                        placeholder="E-mail"
                        name="email"
                        type="email"
                        value={user.email}
                        styleClass="form-style"
                        onChange={e => setUser({ ...user, [e.target.name]: e.target.value })}
                    />
                    <Input
                        placeholder="Userame"
                        name="username"
                        type="text"
                        value={user.username}
                        styleClass="form-style"
                        onChange={e => setUser({ ...user, [e.target.name]: e.target.value })}
                    />
                    <Input
                        placeholder="Password"
                        name="password"
                        type="text"
                        value={user.password}
                        styleClass="form-style"
                        onChange={e => setUser({ ...user, [e.target.name]: e.target.value })}
                    />
                    <Button value="Log In" type="Submit" styleClass="btns btns-submit"/>
                </div>
            </div>

        </div>
    )
}

export default Login;