import React from "react";
import { Button } from "../components/Common/Forms/Button";
import "../JoinUs/Card.css"
import { useNavigate } from "react-router-dom"



export const Card =({
    picture,
    value,
    altText,
    linkRef
}) =>{

    let navigate = useNavigate();

    
    return (
        <div className="cards">
            <figure className="hover-img">
                <img src={picture} alt={altText}/>
                <figcaption>
                    <div className="text-block">
                        <h1>{value}{"\n\n"}</h1>
                        <Button styleClass={"btns btns-card"} value={"REGISTER"} onClick={() => navigate('/register')}></Button>
                        <a href={linkRef}>Learn More</a>
                    </div>
            </figcaption>
            </figure>
            
        </div>
    );
};
