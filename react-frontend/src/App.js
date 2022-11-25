import React from 'react'
import { useEffect } from 'react'
import { About, Footer, Header, Testimonial, Skills, Work } from './container'
import Certifications from './container/Certifications/Certifications'
import { Navbar } from './components'
import './App.scss'
import ReactGa from 'react-ga'

const App = () => {
  useEffect(() => {
    ReactGa.initialize('UA-163282676-2')
    // to report page view 
    ReactGa.pageview('/')
  }, [])
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Certifications />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App