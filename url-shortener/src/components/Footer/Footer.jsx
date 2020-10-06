import React from 'react';

import facebook from '../../assets/icon-facebook.svg'
import twitter from '../../assets/icon-twitter.svg'
import instagram from '../../assets/icon-instagram.svg'
import pinterest from '../../assets/icon-pinterest.svg'

import './Footer.scss'


const Footer = () => (
    <div className='footer-container' >
        <div className='logo-container' >
            <h2>Shortly</h2>
        </div>
        <div className="features-container" >
            <div className='features'>
                <h3>Features</h3>
                <p>Link Shortening</p>
                <p>Branded Links</p>
                <p>Analytics</p>
            </div>
            <div className='resources'>
                <h3>Resources</h3>
                <p>Blog</p>
                <p>Developers</p>
                <p>Support</p>
            </div>
            <div className='company'>
                <h3>Company</h3>
                <p>About</p>
                <p>Our Team</p>
                <p>Careers</p>
                <p>Contact</p>
            </div>
        </div>
        <div className='social-media-container' >
            <img src={facebook} alt='facebook logo' />
            <img src={twitter} alt='twitter logo' />
            <img src={pinterest} alt='pinterest logo' />
            <img src={instagram} alt='instagram logo' />
        </div>
    </div>
)


export default Footer; 