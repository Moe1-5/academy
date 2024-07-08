import React from 'react'
import logo from '../images/logo.png'
import { NavLink, useNavigate } from 'react-router-dom'

const ContactUs = () => {
    const navigate = useNavigate()

    const handleLoginClick = () => {
        navigate('/login')
    }


    return (
        <div>
            <nav className='home-nav'>
                <img src={logo} alt='LOGO' className='home-img' />
                <div className='home-nav-container'>
                    <button className='home-btn'>Sign Up</button>
                    <button className='home-btn' onClick = {() => handleLoginClick ()}>Log In</button>
                    <span className='home-span'>
                    <NavLink to='/' exact activeClassName='active'>Home</NavLink>
                    </span>
                    <span className='home-span'>
                    <NavLink to='/about-us' activeClassName='active'>About Us</NavLink>
                    </span>
                </div>
            </nav>
            <main className='contact-container'>
                <div className='contact-card'>
                    <p>You can contact us through our Gmail : <span className='mail-text'>ExcellenceAcademy@gmail.com</span></p>
                    <div className="outer-circle">
                        <div className="inner-circle"></div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default ContactUs