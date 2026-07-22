import { useRef } from 'react'
import useReveal from '../hooks/useReveal.js'
import Hero from '../components/Hero.jsx'
import Marquee from '../components/Marquee.jsx'
import ServicesSection from '../components/ServicesSection.jsx'
import Stats from '../components/Stats.jsx'
import Process from '../components/Process.jsx'
import CtaBanner from '../components/CtaBanner.jsx'

export default function Home() {
  const root = useRef(null)
  useReveal(root)

  return (
    <div ref={root}>
      <Hero />
      <Marquee />
      <ServicesSection />
      <Stats />
      <Process />
      <CtaBanner />
    </div>
  )
}
