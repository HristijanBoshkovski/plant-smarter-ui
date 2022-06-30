import React from "react";

import { Button } from "../components/Common/Forms/Button";
import Input from "../components/Common/Forms/Input";
import { useUserAuth } from "../CustomHooks/useUserAuth";

import "./Progress.css"

const Progress = props => {
    const [user] = useUserAuth()
    const openForm = () => document.getElementById("myForm").style.display = "block";
    const closeForm = () => document.getElementById("myForm").style.display = "none";
    const numTrees = props.trees.filter(tree => tree.user_id == user.id).length
    return (
        <div className="progress-container">
            <h2>YOUR PROGRESS</h2>
            <div className="donate">
                <div className="progress-bar">
                    <div className="statistics">
                        <h6>Trees Planted</h6>
                        <h3>{numTrees}</h3>
                        <h6>Donations</h6>
                        <h3>{numTrees * 150}MKD</h3>
                    </div>
                    <div className="loader">
                        <div className="pie animate no-round" style={{ "--p": numTrees % 10 / 10 * 100, "--c": "#13463D" }}> {numTrees % 10 / 10 * 100}%</div>
                        <h4>NEXT TREE</h4>
                    </div>
                </div>
                <Button styleClass={"btns btn-donate"} value={"DONATE"} onClick={() => openForm()} />

                <div className="form-popup" id="myForm">
                    <div className="form-container-tree">
                        <div className="form-text-tree">
                            <h4>Thank you for getting envolved in our mission to save the forests!</h4>
                            <h3>MAKE A DONATION NOW</h3>
                        </div>
                        <div className="donate-inputs">
                            <Input type="text" placeholder="Your Name" name="donator-name" />
                            <Input type="number" placeholder="Donation Amount" name="donation-amount" />
                        </div>
                        <Button type="submit" styleClass="btn-donate-form" value={"Donate"} />
                        <Button type="submit" styleClass="btn-donate-form btn-close-form" value={"Close"} onClick={() => closeForm()} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Progress;