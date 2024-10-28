import React from 'react'
import { GridBackgroundDemo } from './GridBackgroundDemo'
import { TypewriterEffectSmoothDemo } from './Power'
import { BentoGridDemo } from './BentoGrid'
import About from './About'
import Contact from './Contact'
import { AnimatedPinDemo } from './AnimatedPinDemo'
import { InfiniteMovingCardsDemo } from './InfiniteMovingCardsDemo'
import Footer from './Footer'


const Hero = () => {
  return (
    <div className='pt-20 pb-5 max-w-7xl'>
      <TypewriterEffectSmoothDemo />
      <GridBackgroundDemo />
      <BentoGridDemo />
      <About />
      <AnimatedPinDemo />
      <InfiniteMovingCardsDemo />
      <Contact />
      <Footer />
    </div>
  )
}

export default Hero