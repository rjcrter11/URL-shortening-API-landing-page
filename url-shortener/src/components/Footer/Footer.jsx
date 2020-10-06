import React from 'react';

import { ReactComponent as Facebook } from '../../assets/icon-facebook.svg'
import { ReactComponent as Twitter } from '../../assets/icon-twitter.svg'
import { ReactComponent as Instagram } from '../../assets/icon-instagram.svg'
import { ReactComponent as Pinterest } from '../../assets/icon-pinterest.svg'

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
                <a href='/'>Suaport</a>
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
            <Facebook className='icon' />
            <Twitter className='icon' />
            <Pinterest className='icon' />
            <Instagram className='icon' />
        </div>
    </div>
)


export default Footer; 