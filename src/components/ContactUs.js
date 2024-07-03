import react from 'react'
import logo from '../images/logo.png'

const ContactUs = () => {
    return (
        <div>
            <nav className='home-nav'>
                <img src={logo} alt='LOGO' className='home-img' />
                <div className='home-nav-container'>
                    <button className='home-btn'>Sign Up</button>
                    <button className='home-btn'>Log In</button>
                    <span className='home-span'><a href='./'>Home</a></span>
                    <span className='home-span'><a href='./About-us'>About Us</a></span>
                </div>
            </nav>
            <main className='contact-container'>
                <div className='contact-card'>
                    <p>You can contact us through our Gmail : <span className='mail-text'>ExcellenceAcademy@gmail.com</span></p>
                    <div class="outer-circle">
                        <div class="inner-circle"></div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default ContactUs