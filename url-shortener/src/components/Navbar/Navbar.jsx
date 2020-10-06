import React from 'react'
import Logo from '../../assets/logo.svg'
import './Navbar.scss'

const Navbar = () => (
    <div className='nav-container' >
        <div className='logo-container' >
            <img src={Logo} alt='shortly logo' />

            <div className='features' >

                <a href='/' >Features</a>
                <a href='/'>Pricing</a>
                <a href='/'>Resources</a>

            </div>
        </div>
        <div className='login-container' >

            <a href='/'>Login</a>
            <a href='/'>Sign Up</a>

        </div>
    </div>
)

export default Navbar