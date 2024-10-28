// Footer UI for the Blog app
import React from 'react'
import './Footer.css'
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <footer className='footer'>
        <div className='footerWrap'>
            <div className='followUsWrap'>
                <h3 className='followUsTitle'>Follow Us</h3>
                <p className='followUsDecription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p>
                <div className='followUsIcons'>
                    <FaInstagramSquare color='orange' className='followUsIcon'/>
                    <FaLinkedin color='orange' className='followUsIcon'/>
                    <FaFacebookSquare color='orange' className='followUsIcon'/>
                    <FaYoutubeSquare color='orange' className='followUsIcon'/>
                </div>
            </div>
            <div className='footerLinks'>
                <h3 className='footerLinksTitle'>Links</h3>
                <div className='footerLinksWrap'>
                    <p className='footerLink'>FAQ</p>
                    <p className='footerLink'>Terms of Service</p>
                    <p className='footerLink'>Cookie</p>
                    <p className='footerLink'>Support</p>
                </div>
            </div>
            <div className='subscribeNewsletter'>
                <h3 className='newsLetterTitle'>Newsletter</h3>
                <p className='newsLetterDescription'>Subscribe to our newsletter to see the newest blogs</p>
                <input type='text' placeholder='Your email' className='newsLetterInput'></input>
                <br></br>
                <button className='newsLetterButton'>Subscribe</button>
            </div>
        </div>
        <div className='underFooter'>
            <div className='quickLinks'>
                <Link to='/' className='footerLinks'>Home</Link>
                <Link to='/about' className='footerLinks'>About</Link>
                <Link to='/blogs' className='footerLinks' >Blogs</Link>
                <Link to='/contact' className='footerLinks'>Contact</Link>
            </div>
            <div className='copyright'>
                <p className='footerLinks'>© 2024 Created by stupid dev</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer