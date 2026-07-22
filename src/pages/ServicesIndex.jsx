import { useRef } from 'react'
import useReveal from '../hooks/useReveal.js'
import { SERVICES } from '../data/services.js'
import ServiceCard from '../components/ServiceCard.jsx'
import CtaBanner from '../components/CtaBanner.jsx'

export default function ServicesIndex() {
  const root = useRef(null)
  useReveal(root)

  return (
    <div ref={root}>
      <section className="page-hero">
        <div className="wrap">
          <div className="sec-head" style={{ marginBottom: 0 }}>
            <span className="sec-tag" data-reveal>
              Services
            </span>
            <h1 className="sec-title disp" data-reveal>
              Pick a department. <span className="accent">Hand it over.</span>
            </h1>
            <p className="sec-sub" data-reveal>
              Take one service or the whole back office — each one runs on
              its own, and they get sharper together. Every plan comes with
              real people who know what a rate con and a CVOR are.
            </p>
          </div>
        </div>
      </section>
      <section className="services" style={{ paddingTop: 24 }}>
        <div className="wrap">
          <div className="svc-grid">
            {SERVICES.map((svc) => (
              <ServiceCard key={svc.slug} svc={svc} />
            ))}
          </div>
        </div>
      </section>
      <CtaBanner />
    </div>
  )
}
