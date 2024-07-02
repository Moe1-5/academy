import react from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/About-us' element={<AboutUs />} />
        <Route path='/Contact-us' element={<ContactUs />} />
      </Routes>
    </Router>
  )
}

export default App
