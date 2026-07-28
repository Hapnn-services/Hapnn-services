import { useRef } from 'react'
import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal.js'
import { SERVICES } from '../data/services.js'
import ContactForm from '../components/ContactForm.jsx'

export default function ContactPage() {
  const root = useRef(null)
  useReveal(root)

  return (
    <div ref={root}>
      <section className="page-hero">
        <div className="wrap">
          <div className="sec-head" style={{ marginBottom: 0 }}>
            <span className="sec-tag" data-reveal>
              Contact
            </span>
            <h1 className="sec-title disp" data-reveal>
              Let's talk about <span className="accent">your fleet.</span>
            </h1>
            <p className="sec-sub" data-reveal>
              Tell us how many units you run and where they roll. We'll
              reply within one business day with what comes off your plate
              and what it costs to keep it there.
            </p>
          </div>
        </div>
      </section>

      <section className="detail">
        <div className="wrap detail-grid">
          <div className="detail-card" data-reveal>
            <h3 className="disp">Send a message</h3>
            <ContactForm />
          </div>

          <div className="contact-side" data-reveal>
            <div className="detail-card">
              <h3 className="disp">Reach us directly</h3>
              <ul className="contact-info">
                <li>
                  <span>Email</span>
                  <a href="mailto:contact@hapnn.ca">contact@hapnn.ca</a>
                </li>
                <li>
                  <span>Location</span>
                  <b>Toronto, Ontario, Canada</b>
                </li>
                <li>
                  <span>Response time</span>
                  <b>Within one business day</b>
                </li>
              </ul>
            </div>

            <div className="detail-card">
              <h3 className="disp">Not sure where to start?</h3>
              <ul className="contact-quicklinks">
                {SERVICES.map((svc) => (
                  <li key={svc.slug}>
                    <Link to={`/services/${svc.slug}`}>{svc.title} →</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
