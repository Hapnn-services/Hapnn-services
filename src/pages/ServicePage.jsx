import { useRef } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import useReveal from '../hooks/useReveal.js'
import { SERVICES } from '../data/services.js'
import CtaBanner from '../components/CtaBanner.jsx'

export default function ServicePage() {
  const { slug } = useParams()
  const root = useRef(null)
  useReveal(root, [slug])

  const idx = SERVICES.findIndex((s) => s.slug === slug)
  if (idx === -1) return <Navigate to="/services" replace />

  const svc = SERVICES[idx]
  const prev = SERVICES[(idx + SERVICES.length - 1) % SERVICES.length]
  const next = SERVICES[(idx + 1) % SERVICES.length]
  const { page } = svc

  return (
    <div ref={root} key={svc.slug}>
      <section className="page-hero">
        <div className="wrap">
          <div className="crumbs" data-reveal>
            <Link className="crumb-back" to="/services">
              ← All services
            </Link>
            <span className="crumb-badge">
              {svc.num} — {svc.title}
            </span>
          </div>
          <h1 className="disp" data-reveal>
            {page.head} <span className="accent">{page.headHl}</span>
          </h1>
          <p className="sec-sub" data-reveal>
            {page.intro}
          </p>
          <div className="page-chips" data-reveal>
            {page.chips.map((chip) => (
              <span className="chip" key={chip}>
                {chip}
              </span>
            ))}
          </div>
          <div className="hero-ctas" data-reveal>
            <Link className="btn btn-primary" to={`/contact?service=${svc.slug}`}>
              Book a call
            </Link>
            <Link className="btn btn-ghost" to="/#process">
              How onboarding works
            </Link>
          </div>
        </div>
      </section>

      <section className="detail">
        <div className="wrap detail-grid">
          <div className="detail-card" data-reveal>
            <h3 className="disp">{page.includedTitle}</h3>
            <ul className="detail-points">
              {page.included.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="detail-card" data-reveal>
            <h3 className="disp">How it runs</h3>
            <div className="run-steps">
              {page.steps.map((step, i) => (
                <div className="run-step" key={step.t}>
                  <b>
                    <span className="run-num">0{i + 1}</span>
                    {step.t}
                  </b>
                  <p>{step.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pn">
        <div className="wrap pn-grid">
          <Link className="pn-link" to={`/services/${prev.slug}`} data-reveal>
            <span>← Previous</span>
            <b className="disp">{prev.title}</b>
          </Link>
          <Link className="pn-link pn-next" to={`/services/${next.slug}`} data-reveal>
            <span>Next →</span>
            <b className="disp">{next.title}</b>
          </Link>
        </div>
      </section>

      <CtaBanner />
    </div>
  )
}
