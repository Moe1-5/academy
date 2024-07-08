import react from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import Login from './components/Login'
import Student from './components/Student'
import ClassModules from './components/ClassModules'
import Video from './components/Video'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/login' element={<Login />} />
        <Route path='/class' element={<Student />} />
        <Route path='/class/:classId' element={<ClassModules />} />
        <Route path='/class/:classId/module/:videoId' element={<Video />} />
      </Routes>
    </Router>
  )
}

export default App
