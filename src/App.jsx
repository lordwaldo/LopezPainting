import { useState } from 'react'
import { Hero } from './components/Hero'
import {About } from './components/About'
import { Service } from './components/Service'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'


function App() {
  return (
    <div className='min-h-screen'>
      <Hero />
      <About />
      <Service />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
