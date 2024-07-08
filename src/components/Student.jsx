import React, { useState } from 'react';
import logo from '../images/logo.png';
import imgCard from '../images/third-image.jpg'
import { useNavigate } from 'react-router-dom'
const Student = () => {
    const navigate = useNavigate()
    const [enrolledClasses, setEnrolledClasses] = useState([]);
    const [pendingRequests, setPendingRequests] = useState([]);

    const classes = [
        {
            id: 1,
            title: "Object Oriented Programming",
            teacher: "Micheal"
        },
        {
            id: 2,
            title: "Data Structures and Algorithms",
            teacher: "Emily"
        },
        {
            id: 3,
            title: "Database Management Systems",
            teacher: "John"
        },
        {
            id: 4,
            title: "Web Development",
            teacher: "Sarah"
        },
        {
            id: 5,
            title: "Artificial Intelligence",
            teacher: "David"
        },
        {
            id: 6,
            title: "Machine Learning",
            teacher: "Alice"
        },
        {
            id: 7,
            title: "Computer Networks",
            teacher: "Kevin"
        },
        {
            id: 8,
            title: "Software Engineering",
            teacher: "Emma"
        }
    ]

    const handleEnrollRequest = (classId) => {
        if (!pendingRequests.includes(classId)) {
            setPendingRequests([...pendingRequests, classId]);
        }
    };
 
    const handleAcceptEnroll = (classId) => {
        setEnrolledClasses([...enrolledClasses, classId]);
        setPendingRequests(pendingRequests.filter(id => id !== classId));
    };

    const handleRejectEnroll = (classId) => {
        setPendingRequests(pendingRequests.filter(id => id !== classId));
    };
    const handleEnrolled = (classId) => {
        if(enrolledClasses.includes(classId)) {
            navigate(`/class/${classId}`)
        }
    };

    return (
        <div>
            <nav className='home-nav'>
                <img src={logo} alt='LOGO' className='home-img' />
                <div className='home-nav-container'>
                    {/* Navigation links and buttons can go here */}
                </div>
            </nav>
            <main className='student-main'>
                {classes.map((classItem, index) => (
                    <div
                    key={index}
                    className= "class-container" onClick={() => enrolledClasses.includes(classItem.id) && handleEnrolled(classItem.id)}>
                        <div className='card-img'> 
                            <img src= {imgCard} alt="course-pic" />
                        </div>
                        <hr />
                        <div className='card-desc'>
                            <h3>{classItem.title}</h3>
                            <p>Teacher: {classItem.teacher}</p>
                            {enrolledClasses.includes(classItem.id) ? (
                                <button className='enrolled-btn card-btn' onClick = {() => handleEnrolled(classItem.id)}>Enrolled</button>
                            ) : pendingRequests.includes(classItem.id) ? (
                                <div>
                                    {/* put an accept and deny buttons 
                                    in the ADMIN page and link it in here,
                                     so that the button changes to enrolled */}
                                    <button className='cancel-btn card-btn' onClick={() => handleRejectEnroll(classItem.id)}>Pending Request</button>
                                </div>
                            ) : (
                                <button className='enroll-btn card-btn' onClick={() => handleEnrollRequest(classItem.id)}>Enroll</button>
                            )}
                             {pendingRequests.includes(classItem.id) && (
                                <div className="request-actions">
                                    <button className="accept-btn" onClick={() => handleAcceptEnroll(classItem.id)}>Accept</button>
                                    <button className="reject-btn" onClick={() => handleRejectEnroll(classItem.id)}>Reject</button>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </main>
        </div>
    );
};

export default Student;
