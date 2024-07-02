import react from "react";
import logo from '../images/logo.png'
import homeImage from '../images/home-image.avif'

const Home = () => {
    return (
        <div>
            <nav className='home-nav'>
                <img src={logo} alt='LOGO' className='home-img' />
                <div className='home-nav-container'>
                    <button className='home-btn'>Sign Up</button>
                    <button className='home-btn'>Log In</button>
                    <span className='home-span'><a href='./Contact-us'>Contact Us</a></span>
                    <span className='home-span'><a href='./About-us'>About Us</a></span>
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
                <button> Sign Up Now!</button>
            </div>
        </div>
    )
}

export default Home