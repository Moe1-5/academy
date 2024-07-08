import React from 'react'
import logo from '../images/logo.png'
import { useParams, useNavigate } from 'react-router-dom'
import video from '../video/test-video.mp4'
const Video = () => {
    const { classId,videoId } = useParams()
    const navigate = useNavigate()


    const handleClassButton = () => {
      navigate("/class")
    }

    const handleNextClass = () => {

      const nextVideoId = parseInt(videoId) + 1;
    const currentClassId = parseInt(classId); 
    if (videos[currentClassId] && videos[currentClassId][nextVideoId - 1]) {
        navigate(`/class/${currentClassId}/module/${nextVideoId}`);
    } else {
        navigate(`/class/${currentClassId}/module/1`)
      }
    }

    const videos = {
      1:[
          { id: 1, title: "Introduction to OOP Video", url: video },
          { id: 2, title: "Classes and Objects Video", url: video },
          { id: 3, title: "Inheritance and Polymorphism Video", url: video },
          { id: 4, title: "Encapsulation and Abstraction Video", url: video }
      ],
      2:[
          { id: 1, title: "Introduction to Data Structures Video", url: video },
          { id: 2, title: "Arrays and Linked Lists Video", url: video },
          { id: 3, title: "Stacks and Queues Video", url: video },
          { id: 4, title: "Trees and Graphs Video", url: video }
      ],
      // Add other classes similarly...
    }

    const videoData  = videos[classId]
    const videoItem = videoData[videoId - 1]

    console.log(classId)
    console.log(videoId)
    console.log(videoData)
    console.log(videoItem)

    if(!videoData) {
      return <div>video not found</div>
    }

  return (
    <div className = 'video-main'>
         <nav className='home-nav'>
                <img src={logo} alt='LOGO' className='home-img' />
                <h2 className = 'video-nav-title'>{videoItem.title}</h2>    
                <div className='video-nav-container '>
                <button className='home-btn video-btn' onClick = {handleClassButton}>Classes</button>
                <button className='home-btn video-btn'onClick={ () => handleNextClass()}>Next</button>
                    {/* Navigation links and buttons can go here */}
                </div>
        </nav>
        <div className = 'video-container'> 
              <video controls>
                <source src= {videoItem.url} type="video/mp4" />
                  Your browser does not support the video tag.
              </video>
        </div>
    </div>
  )
}

export default Video