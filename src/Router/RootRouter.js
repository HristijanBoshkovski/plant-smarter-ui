import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Landing from "../components/Landing/Views/Landing";
import Input from "../components/Common/Forms/Input"
import Select from "../components/Common/Forms/Select"
import { useState } from "react";
const RootRouter = props => {
    const [user, setUser] = useState({ username: "", password: "", selected: [] })

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/test" element={<div>
                    test
                    <Input
                        label="Enter Username*"
                        name="username"
                        type="text"
                        value={user.username}
                        onChange={e => setUser({ ...user, [e.target.name]: e.target.value })}
                    />
                    <Select
                        options={[{ id: 1, username: "Dimitar" }, { id: 2, username: "Ratimid" }]} dispKey="username" valKey="id"
                        onChange={e => setUser({...user, selected: e.target.value})}
                        name="selected" type="multipleSelect" value={user.selected}
                    />
                    {JSON.stringify(user)}
                </div>} />
            </Routes>
        </Router>
    )
}

export default RootRouter