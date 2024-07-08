import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import logo from "../images/logo.png"

const ClassModules = () => {
    const { classId } = useParams();
    const navigate = useNavigate()


    const handleModules = (videoId) => {
        navigate(`./module/${videoId}`)
    }

    const modules = {
        1: [
            { id: 1, title: "Introduction to OOP", content: "Content for module 1" },
            { id: 2, title: "Classes and Objects", content: "Content for module 2" },
            { id: 3, title: "Inheritance and Polymorphism", content: "Content for module 3" },
            { id: 4, title: "Encapsulation and Abstraction", content: "Content for module 4" }
        ],
        2: [
            { id: 1, title: "Introduction to Data Structures", content: "Content for module 1" },
            { id: 2, title: "Arrays and Linked Lists", content: "Content for module 2" },
            { id: 3, title: "Stacks and Queues", content: "Content for module 3" },
            { id: 4, title: "Trees and Graphs", content: "Content for module 4" }
        ],
        3: [
            { id: 1, title: "Introduction to DBMS", content: "Content for module 1" },
            { id: 2, title: "ER Models", content: "Content for module 2" },
            { id: 3, title: "SQL Basics", content: "Content for module 3" },
            { id: 4, title: "Normalization", content: "Content for module 4" }
        ],
        4: [
            { id: 1, title: "Introduction to Web Development", content: "Content for module 1" },
            { id: 2, title: "HTML & CSS", content: "Content for module 2" },
            { id: 3, title: "JavaScript Basics", content: "Content for module 3" },
            { id: 4, title: "Responsive Design", content: "Content for module 4" }
        ],
        5: [
            { id: 1, title: "Introduction to AI", content: "Content for module 1" },
            { id: 2, title: "Search Algorithms", content: "Content for module 2" },
            { id: 3, title: "Machine Learning Basics", content: "Content for module 3" },
            { id: 4, title: "Neural Networks", content: "Content for module 4" }
        ],
        6: [
            { id: 1, title: "Introduction to Machine Learning", content: "Content for module 1" },
            { id: 2, title: "Supervised Learning", content: "Content for module 2" },
            { id: 3, title: "Unsupervised Learning", content: "Content for module 3" },
            { id: 4, title: "Reinforcement Learning", content: "Content for module 4" }
        ],
        7: [
            { id: 1, title: "Introduction to Computer Networks", content: "Content for module 1" },
            { id: 2, title: "Network Models", content: "Content for module 2" },
            { id: 3, title: "TCP/IP Protocol Suite", content: "Content for module 3" },
            { id: 4, title: "Network Security", content: "Content for module 4" }
        ],
        8: [
            { id: 1, title: "Introduction to Software Engineering", content: "Content for module 1" },
            { id: 2, title: "Software Development Life Cycle", content: "Content for module 2" },
            { id: 3, title: "Agile Methodologies", content: "Content for module 3" },
            { id: 4, title: "Software Testing", content: "Content for module 4" }
        ]
    };

    const handleClassButton = () => {
        navigate('/class')
    }
    

    const classModules = modules[classId] || [];

    return (
        <div className = 'main-module'>
             <nav className='home-nav'>
                <img src={logo} alt='LOGO' className='home-img' />
                <div className='module-nav-container '>
                <button className='home-btn module-btn ' onClick = {handleClassButton}>Classes</button>
                    {/* Navigation links and buttons can go here */}
                </div>
            </nav>
            <h1 className = 'modules-title'>Modules for Class</h1>
            <div className='modules-container'>
                {classModules.map(module => (
                    <div key={module.id} className='module-card' onClick = {() => handleModules(module.id)}>
                        <h2>{module.title}</h2>
                        <p>{module.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ClassModules;
