import react from 'react';
import firstImage from '../images/first-image.avif';
import secondImage from '../images/second-image.avif';

const AboutUs = () => {
    return (
        <main>
            <div className='cards-container'>
                <div className='main-description'>
                    <div className='text-container'>
                        <h4>Our mission is to create a seamless digital learning environment that enhances student learning experiences and simplifies administrative tasks for educators. We aim to offer easy access to educational resources, foster student engagement through interactive video lectures, and streamline the enrollment process. Our goal is to contribute to a more effective educational environment, supporting academic success and administrative efficiency.</h4>
                    </div>
                    <hr className='line' />
                    <img src={firstImage} alt='Friends Study' className='home-main-img' />
                </div>
            </div>

            <div className='cards-container'>
                <div className='main-description'>
                    <img src={secondImage} alt='Friends Study' className='home-main-img second-main-img' />
                    <hr className='line' />
                    <div className='text-container second-text-container'>
                        <h4>Our primary users are students, typically high school and university students aged 15-25. They are tech-savvy and rely on our platform for accessing educational materials, video lectures, and monitoring their academic progress. Educators, including teachers and lecturers aged 25-60, form our secondary audience. They require an efficient system to manage course materials, upload lectures, update syllabi, and monitor student engagement. Our platform supports educators with varying levels of technical proficiency.</h4>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default AboutUs