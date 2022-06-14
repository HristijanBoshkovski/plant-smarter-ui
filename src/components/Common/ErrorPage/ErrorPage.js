import React from "react"
import { NavLink } from "react-router-dom"

// PROP TYPES:
// code : INTEGER (e.g. 404, 400, 500...)
// message : STRING (e.g. Resource not found, bad request, server error...)
// redirectTo? : OBJECT : { path, label } (e.g. { path: "/home", label: "Navigate back to home" })

const ErrorPage = props => {

    return (
        <div className="error-page-container">
            <div className="error-info">
                <h1>Error {props.code}</h1>
                <h3>{props.message}</h3>
                {props.redirectTo === undefined ? null : <NavLink to={props.redirectTo.path}>{props.redirectTo.label}</NavLink>}
            </div>
            <div className="error-image">
                <img src="../../../static/error-page.jpg" />
            </div>
        </div>
    )
}