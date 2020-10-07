import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import Logo from '../../assets/logo.svg'

import './Navbar.scss'
const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false)


    const handleClick = (e) => {
        e.preventDefault()
        setToggleMenu(!toggleMenu)
    }



    return (
        <div className='nav-container' >
            <div className='logo-container' >
                <img src={Logo} alt='shortly logo' />
                <div className='features' >
                    <a href='/' >Features</a>
                    <a href='/'>Pricing</a>
                    <a href='/'>Resources</a>
                </div>
            </div>

            <div className="toggle-container">
                <FontAwesomeIcon className="toggle-button" onClick={handleClick} icon={faBars} />
                {
                    toggleMenu
                        ? (
                            <div className='toggled-items-container' >
                                <a href='/' >Features</a>
                                <a href='/'>Pricing</a>
                                <a href='/'>Resources</a>
                                <a href='/'>Login</a>
                                <a href='/'>Sign Up</a>
                            </div>
                        ) : null
                }
            </div>
            <div className='login-container' >
                <a href='/'>Login</a>
                <a href='/'>Sign Up</a>
            </div>
        </div>
    )
}

export default Navbar