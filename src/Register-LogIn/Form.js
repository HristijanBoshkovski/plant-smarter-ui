import React from "react";
import { useState } from "react";
import { Button } from "../components/Common/Forms/Button";

import Input from "../components/Common/Forms/Input"
import Radio from "../components/Common/Forms/Radio";

import "../components/Common/Radio.css"

const Form = props => {
    const [user, setUser] = useState({ username: "", password: "", confirmPassword: "", name: "", email: "", surname: "", businessname: "", schoolname: "", selected: [], type: "individual" })
    const userType = [
        {
            id: 1,
            label: 'Individual',
            value: 'individual'
        },
        {
            id: 2,
            label: 'Business',
            value: 'business'
        },
        {
            id: 3,
            label: 'School',
            value: 'school'
        }
    ];
    console.log('Userrr', user)
    return (
        <div className="form-container">
            <Input
                placeholder="First Name"
                name="name"
                type="text"
                value={user.name}
                styleClass="form-style"
                onChange={e => setUser({ ...user, [e.target.name]: e.target.value })}
            />
            <Input
                placeholder="Last Name"
                name="surname"
                type="text"
                value={user.surname}
                styleClass="form-style"
                onChange={e => setUser({ ...user, [e.target.name]: e.target.value })}
            />
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
            <Input
                placeholder="Confirm Password"
                name="confirmPassword"
                type="text"
                value={user.confirmPassword}
                styleClass="form-style"
                onChange={e => setUser({ ...user, [e.target.name]: e.target.value })}
            />
            <div className="radio-button">
                <Radio 
                    radioButtons={userType}
                    name="type"
                    onChange={e => setUser({ ...user, [e.target.name]: e.target.value })}
                />
            </div>
            <Input
                placeholder="Business Name"
                name="businessname"
                type="text"
                value={user.businessname}
                styleClass="form-style"
                onChange={e => setUser({ ...user, [e.target.name]: e.target.value })}
            />
            <Input
                placeholder="School Name"
                name="schoolname"
                type="text"
                value={user.schoolname}
                styleClass="form-style"
                onChange={e => setUser({ ...user, [e.target.name]: e.target.value })}
            />
            <Button value="Register" type="Submit" styleClass="btns btns-submit" />

        </div>
    )
}

export default Form;