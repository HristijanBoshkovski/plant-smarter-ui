import React from "react";
import './Paragraph.css'

function Paragraph(){
    return(
        <div className="paragraph-container">
            <div id="business-par">
                <div className="triangle-right"></div>
                <span>
                    <h1>Business</h1>
                    <p>Tree planting partnerships are a low-cost, easy way to demonstrate your company’s environmental commitment. </p>
                    <p>Planting a tree is theoretically its own reward, as trees result in cleaner air, a purer atmosphere, lower chances of flooding, and lower temperatures. </p>
                    <p>Being a part of the "Plant smarter" campaign can help the businesses encourage their employees to be more active in the global process of preserving our planet.</p>
                    <p>After enrolling in the program, every dollar your business donates will plant a tree on one of our mountains.</p>
                </span>
            </div>
            <div id="individuals-par">
                <span>
                    <h1>Individuals</h1>
                    <p>Our goal is to plant a thousands trees across the country to slow the connected crises of climate change and biodiversity loss. </p>
                    <p>Take part of our campaign, enroll in the monthly challenges and win some amaizing prices from our sponsors.</p>
                    <p>If you are not able to go out and plant a tree but you want to support us, you can always donate to our foundation.</p>
                </span>
                <div className="triangle-right triangle-left"></div>
            </div>
            <div id="schools-par">
            <div className="triangle-right triangle"></div>
                <span>
                    <h1>Schools</h1>
                    <p>Tree planting is an incredible way for youngsters to connect with nature while helping the planet. It links to many areas of the curriculum and it’s a fun, hands-on project for gardening and eco clubs. Planting trees also improves your school grounds, whether you’re creating a wildlife area or planting a hedge.</p>

                        <p>And when you plant trees you make a difference to your whole school and the wider community too:
                        green spaces improve physical and mental health,
                        trees and hedges provide homes and food for wildlife, 
                        trees clean the air we breathe
                        trees absorb CO2 – one of the main causes of climate change, etc.
                    </p>
                </span>
            </div>
        </div>
    )
}

export default Paragraph;