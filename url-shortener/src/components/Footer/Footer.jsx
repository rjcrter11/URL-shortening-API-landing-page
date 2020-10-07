import React from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFacebookSquare,
    faTwitter,
    faPinterest,
    faInstagram,
} from '@fortawesome/free-brands-svg-icons'


import './Footer.scss'


const Footer = () => (
    <div className='footer-container' >
        <div className='logo-container' >
            <h2>Shortly</h2>
        </div>
        <div className="features-container" >
            <div className='features'>
                <h3>Features</h3>
                <a href='/' >Link Shortening</a>
                <a href='/'>Branded Links</a>
                <a href='/'>Analytics</a>
            </div>
            <div className='resources'>
                <h3>Resources</h3>
                <a href='/'>Blog</a>
                <a href='/'>Developers</a>
                <a href='/'>Support</a>
            </div>
            <div className='company'>
                <h3>Company</h3>
                <a href='/'>About</a>
                <a href='/'>Our Team</a>
                <a href='/'>Careers</a>
                <a href='/'>Contact</a>
            </div>
        </div>
        <div className='social-media-container' >
            <FontAwesomeIcon icon={faFacebookSquare} className='icon' />
            <FontAwesomeIcon icon={faTwitter} className='icon' />
            <FontAwesomeIcon icon={faPinterest} className='icon' />
            <FontAwesomeIcon icon={faInstagram} className='icon' />
        </div>
    </div>
)


export default Footer; 