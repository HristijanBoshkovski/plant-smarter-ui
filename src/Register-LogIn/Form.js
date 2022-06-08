import React from "react";
import { useState } from "react";
import { Button } from "../components/Common/Forms/Button";

import Input from "../components/Common/Forms/Input"


const Form = props =>{
    const [user, setUser] = useState({ username: "", password: "", name: "", surename: "",  selected: [] })
    return(
        <div className="form-container">
            <Input
                placeholder = "First Name"
                name="name"
                type="text"
                onChange={e => setUser({ ...user, [e.target.name]: e.target.value })}
            />
            <Input
                placeholder = "Last Name"
                name="surename"
                type="text"
                value={user.surename}
                styleClass="form-style"
                onChange={e => setUser({ ...user, [e.target.surename]: e.target.value })}
            />
            <Input
                placeholder = "Userame"
                name="username"
                type="text"
                value={user.username}
                styleClass="form-style"
                onChange={e => setUser({ ...user, [e.target.username]: e.target.value })}
            />
            <Input
                placeholder = "Password"
                name="password"
                type="text"
                value={user.password}
                styleClass="form-style"
                onChange={e => setUser({ ...user, [e.target.password]: e.target.value })}
            />
            <Input
                placeholder = "Confirm Password"
                name="password"
                type="text"
                value={user.password}
                styleClass="form-style"
                onChange={e => setUser({ ...user, [e.target.password]: e.target.value })}
            />
            
            <Button value="Register" type="Submit" styleClass="btns btns-submit"/>
        </div>
    )
}

export default Form;