import RegisterSuccessImg from "../static/register-success.svg"
import PlantTree from "../static/plant-tree.svg"
import "./RegisterSuccess.css"
import { NavLink, Navigate } from "react-router-dom"
import { useState } from "react"
import { validateEmail } from "../common"
import { ObjectsAPI } from "../Api"
import { useUserAuth } from "../CustomHooks/useUserAuth"
import RegisterObjectJsx from "./RegisterObject"

const RegisterSuccess = props => {

    const [user, login, logout] = useUserAuth()

    const [object, setObject] = useState({
        object_type: "school",
        name: "FIKT",
        email: "fikt@uklo.edu.mk",
        bio_info: "FIKT is a faculty for IT located in Bitola under the UKLO university.",
        picture: null,
    })
    const [redirect, setRedirect] = useState(false)
    const [submitHandler, setSubmitHandler] = useState({
        submitted: false,
        type: "idle",
        message: ""
    })
    const handleChange = e => {
        setObject({ ...object, [e.target.name]: e.target.value })
        setSubmitHandler({
            submitted: false, type: "idle", message: ""
        })
    }

    console.log(JSON.parse(localStorage.getItem("user")).user.id)

    const handleSubmit = async e => {
        e.preventDefault()

        if (object.name.length < 3) return setSubmitHandler({
            submitted: true, type: "warning",
            message: "Please enter more descriptive name."
        })
        else if (validateEmail(object.email) === null) return setSubmitHandler({
            submitted: true, type: "warning",
            message: "Please enter a valid email address."
        })
        else if (object.bio_info.length < 64) return setSubmitHandler({
            submitted: true, type: "warning",
            message: "Please enter more descriptive bio information."
        })
        else if (object.picture === null) return setSubmitHandler({
            submitted: true, type: "warning",
            message: "Please select an image."
        })
        setSubmitHandler({ type: "pending", message: "Registering your user account... Please wait.", submitted: true })

        const form = new FormData()
        form.append("object_type", object.object_type)
        form.append("name", object.name)
        form.append("email", object.email)
        form.append("bio_info", object.bio_info)
        form.append("picture", object.picture)
        form.append("creator_id", JSON.parse(localStorage.getItem("user")).user.id)
        ObjectsAPI.create(form)
            .then(res => {
                setSubmitHandler({ type: "success", message: "Register success.", submitted: true })
                setRedirect("/raise-a-tree/")
            })
            .catch(error => setSubmitHandler({ type: "error", message: error.message, submitted: true }))

    }

    return redirect === false ? (
        <div className="register-success-container">
            <span>
                <img src={RegisterSuccessImg} alt="register-success"/>
                <h1>Register Success!</h1>
            </span>
            <div className="step-two-container">
                <NavLink to="/raise-a-tree">
                    <h1>Raise a tree</h1>
                    <img src={PlantTree} alt="Raise a tree" />
                </NavLink>
                <h1>OR</h1>
                <span to="/plant-a-tree">
                    <h1>Register as school or business</h1>
                    <RegisterObjectJsx 
                        handleSubmit={handleSubmit}
                        handleChange={handleChange}
                        submitHandler={submitHandler}
                        object={object}
                    />
                </span>
            </div>
        </div>
    ) : <Navigate to={redirect} />
}

export default RegisterSuccess