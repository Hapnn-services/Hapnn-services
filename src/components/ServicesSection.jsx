import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SERVICES } from '../data/services.js'
import ServiceCard from './ServiceCard.jsx'

gsap.registerPlugin(ScrollTrigger)

export default function ServicesSection() {
  const root = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.svc-card', {
        y: 48,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: { trigger: '.svc-grid', start: 'top 82%', once: true },
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section className="services" id="services" ref={root}>
      <div className="wrap">
        <div className="sec-head" data-reveal>
          <span className="sec-tag">What we handle</span>
          <h2 className="sec-title disp">
            Three departments. <span className="accent">Zero overhead.</span>
          </h2>
          <p className="sec-sub">
            Everything that happens between a signed rate con and money in the
            bank — run by people who live in this industry, not a generic
            call centre.
          </p>
        </div>

        <div className="svc-grid">
          {SERVICES.map((svc) => (
            <ServiceCard key={svc.slug} svc={svc} />
          ))}
        </div>
      </div>
    </section>
  )
}
