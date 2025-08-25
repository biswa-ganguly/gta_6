import React from 'react'
import Hero from './sections/Hero'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';



gsap.registerPlugin(ScrollTrigger);
function App() {
  return (
    <main>
      <Hero/>
    </main>
  )
}

export default App