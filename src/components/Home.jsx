import React from "react";
import logo from '../images/logo.png'
import homeImage from '../images/home-image.avif'
import { NavLink, useNavigate } from 'react-router-dom'

const Home = () => {

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
                    <button className='home-btn'onClick={handleLoginClick}>Log In</button>
                    <span className='home-span'>
                        <NavLink to='/contact-us' activeClassName='active'>Contact Us</NavLink>
                    </span>
                    <span className='home-span'>
                        <NavLink to='/about-us' activeClassName='active'>About Us</NavLink>
                    </span>
                </div>
            </nav>
            <div className='cards-container'>
                <div className='main-description'>
                    <div className='text-container'>
                        <h4>The objective of this educational website is to provide a comprehensive educational platform Our focus is on empowering students to manage their academic journey effectively and providing educators with efficient tools for course management and engagement.</h4>
                    </div>
                    <hr className='line' />
                    <img src={homeImage} alt='Friends Study' className='home-main-img' />
                </div>
            </div>
            <div className='main-btn'>
                <button> Log In Now!</button>
            </div>
        </div>
    )
}

export default Home