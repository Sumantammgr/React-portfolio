import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Skills from './Skills'
import About from './About'
import Portfolio from './Portfolio'
import Testimonials from './Testimonials'
import Contact from './Contact'
import Footer from './Footer';
const App = () => {
  return (
   <>
    <Navbar />
    <Home />
    <Skills />
    <About />
    <Portfolio />
    <Testimonials />
    <Contact />
    <Footer />
   </>
  )
}

export default App
