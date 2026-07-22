import { Link } from 'react-router-dom'

export default function CtaBanner() {
  return (
    <section className="contact">
      <div className="wrap">
        <div className="cta-card" data-reveal>
          <h2 className="disp">Stop driving a desk.</h2>
          <p>
            Tell us how many units you run and where they roll. Twenty
            minutes on a call and you'll know exactly what comes off your
            plate — and what it costs to keep it there.
          </p>
          <div className="cta-actions">
            <Link className="btn btn-primary" to="/contact">
              Get in touch
            </Link>
            <a className="btn btn-ghost-inverse" href="mailto:contact@hapnn.com">
              Email us directly
            </a>
          </div>
          <div className="cta-meta">
            <span>Toronto, Ontario, Canada</span>
            <span>Replies within one business day</span>
            <span>No contracts to get started</span>
          </div>
        </div>
      </div>
    </section>
  )
}
