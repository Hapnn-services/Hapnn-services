import { Link } from 'react-router-dom'
import { SERVICES } from '../data/services.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <Link to="/">
              <img src="/logos/Hapnn-green.png" alt="Logo" className="logo" />
            </Link>
            <p className="footer-blurb">
              The back office behind fleets that keep moving. Dispatch,
              accounting, and compliance, run from Toronto, on duty
              everywhere.
            </p>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              {SERVICES.map((svc) => (
                <li key={svc.slug}>
                  <Link to={`/services/${svc.slug}`}>{svc.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li>
                <a href="mailto:contact@hapnn.com">contact@hapnn.com</a>
              </li>
              <li>Toronto, Ontario, Canada</li>
              <li>
                <Link to="/contact">Book a call</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Hapnn. All rights reserved.</span>
          <nav className="footer-legal">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-and-conditions">Terms &amp; Conditions</Link>
          </nav>
          <span>Built to keep trucks earning.</span>
        </div>
      </div>
    </footer>
  )
}
