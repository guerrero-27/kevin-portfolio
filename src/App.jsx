import { useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Services from './Components/Services'
import Works from './Components/Works'
import Skills from './Components/Skills'
import Testimonials from './Components/Testimonials'
import Services2 from './Components/Services2'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import About from './Components/About'
function App() {
  

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Works />
      <Services2 />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App
