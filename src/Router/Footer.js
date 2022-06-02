import React from "react";
import { useState } from "react"
import { Link } from "react-router-dom"
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa'
import './Footer.css'

const Footer = props => {

    const [userEmail, setUserEmail] = useState("")
    const handleNewsLetterSignUp = e => {
        e.preventDefault()
    }
    
    return(
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
    )
}

export default Footer;