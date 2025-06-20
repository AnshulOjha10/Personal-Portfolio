import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Services from './components/Services'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {

  return (<>
      <Navbar/>
      <Header />
      <About/>
      <Services />
      <Work/>
      <Contact />
      <Footer/>
      </>
  )
}

export default App