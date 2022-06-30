import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import Landing from "../components/Landing/Views/Landing";
import Joinus from "../JoinUs/Joinus";
import { Register } from "../Register-LogIn/Register";
import Login from "../Register-LogIn/Login";
import Tree from "../RaiseYourTree/Tree";
import RegisterSuccess from "../Register-LogIn/RegisterSuccess";
import { useUserAuth } from "../CustomHooks/useUserAuth";
import { Fragment } from "react";
import Profile from "../components/User/Profile";


const RootRouter = props => {
    const [user] = useUserAuth()

    return (
        <Router>
            <Routes>

                {user === null ?
                    <Fragment>
                        <Route path="joinus" element={<Joinus />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </Fragment> : null
                }
                <Route path="/" element={<Landing />} />
                <Route path="raise-a-tree" element={<Tree />} />
                <Route path="/register-success" element={<RegisterSuccess />} />
                <Route path="/profile/:id" element={<Profile />} />
            </Routes>
        </Router>
    )
}

export default RootRouter