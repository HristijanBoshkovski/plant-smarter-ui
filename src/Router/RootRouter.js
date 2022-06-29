import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Landing from "../components/Landing/Views/Landing";
import Joinus from "../JoinUs/Joinus";
import { Register } from "../Register-LogIn/Register";
import Login from "../Register-LogIn/Login";
import Tree from "../RaiseYourTree/Tree";
import RegisterSuccess from "../Register-LogIn/RegisterSuccess";


const RootRouter = props => {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="joinus" element={<Joinus />} />
                <Route path="/register" element={<Register/>} />
                <Route path="/register-success" element={<RegisterSuccess/>} />
                <Route path="/login" element={<Login />} />
                <Route path="raise-a-tree" element={<Tree />} />
            </Routes>
        </Router>
    )
}

export default RootRouter