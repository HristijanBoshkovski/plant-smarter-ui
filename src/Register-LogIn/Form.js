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
                value={user.name}
                onChange={e => setUser({ ...user, [e.target.name]: e.target.value })}
            />
            <Input
                placeholder = "Last Name"
                name="surename"
                type="text"
                value={user.surename}
                onChange={e => setUser({ ...user, [e.target.surename]: e.target.value })}
            />
            <Input
                placeholder = "Userame"
                name="username"
                type="text"
                value={user.username}
                onChange={e => setUser({ ...user, [e.target.username]: e.target.value })}
            />
            <Input
                placeholder = "Password"
                name="password"
                type="text"
                value={user.password}
                onChange={e => setUser({ ...user, [e.target.password]: e.target.value })}
            />
            <Input
                placeholder = "Confirm Password"
                name="password"
                type="text"
                value={user.password}
                onChange={e => setUser({ ...user, [e.target.password]: e.target.value })}
            />
            <Button value="Submit"/>
        </div>
    )
}

export default Form;