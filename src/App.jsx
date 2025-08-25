import React from 'react'
import Hero from './sections/Hero'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import NavBar from './sections/NavBar';
import FirstVideo from './sections/FirstVideo';



gsap.registerPlugin(ScrollTrigger);
function App() {
  return (
    <main>
      <NavBar/>
      <Hero/>
      <FirstVideo/>
    </main>
  )
}

export default App