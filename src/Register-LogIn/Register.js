import React, { useState } from "react";

import Nav from "../Router/Nav"
import RegisterJSX from "./RegisterJSX";

import "./Reg-login.css"
import { useUserAuth } from "../CustomHooks/useUserAuth";
import { UsersAPI } from "../Api";
import { validateEmail } from "../common";
import { Navigate } from "react-router-dom"

export const Register = ({
    value,
    linkValue
}) => {

    const [_user, login, logout] = useUserAuth()
    const [user, setUser] = useState({ username: "", password: "", confirmPassword: "", firstname: "", email: "", lastname: "" })
    const [redirect, setRedirect] = useState(false)
    const [submitHandler, setSubmitHandler] = useState({
        submitted: false,
        type: "idle",
        message: ""
    })

    const handleChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
        setSubmitHandler({
            submitted: false, type: "idle", message: ""
        })
    }
    const handleSubmit = async e => {
        e.preventDefault()

        if (user.password.length < 6) return setSubmitHandler({
            submitted: true, type: "warning",
            message: "Please enter a longer password (6 characters or more)"
        })
        else if (user.password !== user.confirmPassword) return setSubmitHandler({
            submitted: true, type: "warning",
            message: "Passwords do not match. Please try again."
        })
        else if ([user.username, user.firstname, user.lastname].includes("")) return setSubmitHandler({
            submitted: true, type: "warning",
            message: "Please fill in the form."
        })
        else if (validateEmail(user.email) === null) return setSubmitHandler({
            submitted: true, type: "warning",
            message: "Please enter a valid email address."
        })
        setSubmitHandler({ type: "pending", message: "Registering your user account... Please wait.", submitted: true })

        const form = new FormData()
        form.append("firstname", user.firstname)
        form.append("lastname", user.lastname)
        form.append("username", user.username)
        form.append("email", user.email)
        form.append("password", user.password)

        UsersAPI.create(form)
            .then(res => {
                login(res)
                setSubmitHandler({ type: "success", message: "Register success.", submitted: true })
                setRedirect("/register-success")
            })
            .catch(error => setSubmitHandler({ type: "error", message: error.message, submitted: true }))

    }

    return redirect === false ? <RegisterJSX
        user={user}
        setUser={setUser}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        submitHandler={submitHandler}
    /> : <Navigate to={redirect} />
    
};