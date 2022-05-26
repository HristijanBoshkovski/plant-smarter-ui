import { NavLink, Link } from "react-router-dom"
import { MdBusinessCenter, MdSchool, MdPerson } from 'react-icons/md'
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa'

import YoungTree from "../../../static/young-tree.jpg"
import PersonaPlantingTree from "../../../static/person-planting-tree.jpg"

import "./Landing.css"
import { useState } from "react"
const Landing = props => {

    const [userEmail, setUserEmail] = useState("")
    const handleNewsLetterSignUp = e => {
        e.preventDefault()
    }

    return (
        <div className="landing container">
            <div className="hero">
                <h1>PLANT A TREE, PLANT HOPE FOR THE FUTURE</h1>
                <span className="buttons">
                    <NavLink to={"/home/register"}>Register</NavLink>
                    <NavLink to={"/home/login"}>Raise a tree</NavLink>
                </span>
            </div>

            <div className="heading">
                <span>
                    <h2>PLANT SMARTER</h2>

                    <p>Every living thing on Earth is made up of four basic elements: carbon, hydrogen, oxygen and nitrogen. Those four elements make up about 96% of your body, and most of a tree's roots, trunk, branches, and leaves.</p>
                    <p>While we humans get most of our carbon from food, trees breathe it in (just like we breathe in oxygen). But when a tree breathes, it inhales carbon dioxide and exhales oxygen — the exact opposite of humans. And as a tree matures, it can consume 22lbs of carbon dioxide per year (among other greenhouse gases like ozone), and release enough oxygen for you to breathe for 2 years!</p>
                </span>
                <img src={PersonaPlantingTree} alt="person planting tree" />
            </div>

            <div className="join-us">
                <h1>JOIN US</h1>
                <div className="icons-container">
                    <span> <MdBusinessCenter /> <h3>Buisness</h3> </span>
                    <span> <MdSchool /> <h3>School</h3> </span>
                    <span> <MdPerson /> <h3>Personal</h3> </span>
                </div>
            </div>

            <div className="heading reverse">
                <span>
                    <h2>PLANT BETTER</h2>

                    <p>Every living thing on Earth is made up of four basic elements: carbon, hydrogen, oxygen and nitrogen. Those four elements make up about 96% of your body, and most of a tree's roots, trunk, branches, and leaves.</p>
                    <p>While we humans get most of our carbon from food, trees breathe it in (just like we breathe in oxygen). But when a tree breathes, it inhales carbon dioxide and exhales oxygen — the exact opposite of humans. And as a tree matures, it can consume 22lbs of carbon dioxide per year (among other greenhouse gases like ozone), and release enough oxygen for you to breathe for 2 years!</p>
                </span>
                <img src={YoungTree} alt="young tree" />
            </div>

            <div className="footer">
                <span className="newsletter-signup">
                    <h4>GET HOOKED! SIGN UP TO OUR NEWSLETTER TO GET REGULAR MAILS ABOUT LATEST TRENDS IN THE ECO-WORLD.</h4>

                    <form onSubmit={e => handleNewsLetterSignUp(e)}>
                        <input placeholder="Enter your email..." type="email" value={userEmail} onChange={e => setUserEmail(e.target.value)} />
                        <button>SIGN UP</button>
                    </form>
                </span>
                <span className="social-media">
                    <Link to={"https://www.instagram.com/"}><FaInstagram /> </Link>
                    <Link to={"https://www.facebook.com/"}><FaFacebookF /> </Link>
                    <Link to={"https://www.twitter.com/"}><FaTwitter /> </Link>
                </span>
            </div>
        </div>
    )
}

export default Landing
