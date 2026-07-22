import { Link } from 'react-router-dom'

export default function TermsPage() {
  return (
    <div>
      <section className="page-hero">
        <div className="wrap">
          <div className="sec-head" style={{ marginBottom: 0 }}>
            <span className="sec-tag">Legal</span>
            <h1 className="disp">
              Terms &amp; <span className="accent">Conditions.</span>
            </h1>
            <p className="legal-updated">Last updated: July 21, 2026</p>
            <p className="sec-sub">
              These terms govern your use of hapnn.com. They don't cover the
              dispatch, accounting, or safety &amp; compliance work itself —
              that's set out in the separate service agreement you sign with
              us once you come on as a client.
            </p>
          </div>
        </div>
      </section>

      <section className="detail">
        <div className="wrap">
          <article className="legal">
            <div className="legal-section">
              <h2>1. Acceptance of these terms</h2>
              <p>
                By browsing this website or submitting the contact form, you
                agree to these terms. If you don't agree, please don't use
                the site.
              </p>
            </div>

            <div className="legal-section">
              <h2>2. Use of this website</h2>
              <p>
                This site is intended for fleet operators, owner-operators,
                and businesses researching or inquiring about our dispatch,
                accounting, and safety &amp; compliance services. You agree
                to use it only for legitimate business purposes and not to:
              </p>
              <ul>
                <li>Submit false, misleading, or malicious information through the contact form</li>
                <li>Attempt to disrupt, scrape, or gain unauthorized access to the site</li>
                <li>Use the site in a way that violates any applicable law</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>3. This site isn't a service agreement</h2>
              <p>
                Content on this website — service descriptions, process
                overviews, figures, and examples — is provided for general
                information and doesn't constitute a binding offer or
                guarantee of results. Any actual engagement for dispatch,
                accounting, or safety &amp; compliance services is governed
                by a separate written agreement between you and Hapnn, which
                takes precedence over anything stated here.
              </p>
            </div>

            <div className="legal-section">
              <h2>4. Intellectual property</h2>
              <p>
                The Hapnn name, logo, and the text, graphics, and design of
                this website belong to Hapnn unless otherwise noted. You may
                view and share pages of this site for personal or internal
                business reference, but you may not reproduce, resell, or
                repurpose our content without our written permission.
              </p>
            </div>

            <div className="legal-section">
              <h2>5. Third-party services</h2>
              <p>
                Our contact form relies on EmailJS to deliver messages and
                Google reCAPTCHA to screen out spam. Your use of the form is
                also subject to{' '}
                <a href="https://www.emailjs.com/legal/terms-of-service/" target="_blank" rel="noreferrer">
                  EmailJS's terms of service
                </a>{' '}
                and{' '}
                <a href="https://policies.google.com/terms" target="_blank" rel="noreferrer">
                  Google's terms of service
                </a>
                . See our <Link to="/privacy-policy">Privacy Policy</Link>{' '}
                for how these providers handle your information.
              </p>
            </div>

            <div className="legal-section">
              <h2>6. No warranty</h2>
              <p>
                This website and its content are provided "as is." We work to
                keep information accurate and current, but we don't warrant
                that the site will be error-free, uninterrupted, or free of
                technical issues.
              </p>
            </div>

            <div className="legal-section">
              <h2>7. Limitation of liability</h2>
              <p>
                To the fullest extent permitted by law, Hapnn is not liable
                for any indirect, incidental, or consequential damages
                arising from your use of this website. Nothing in this
                section limits liability that can't be excluded under
                applicable law.
              </p>
            </div>

            <div className="legal-section">
              <h2>8. Governing law</h2>
              <p>
                These terms are governed by the laws of the Province of
                Ontario and the federal laws of Canada applicable in Ontario,
                without regard to conflict-of-law principles.
              </p>
            </div>

            <div className="legal-section">
              <h2>9. Changes to these terms</h2>
              <p>
                We may update these terms from time to time. Changes take
                effect once posted here, with the "last updated" date above
                revised accordingly. Continuing to use the site after an
                update means you accept the revised terms.
              </p>
            </div>

            <div className="legal-section">
              <h2>10. Contact us</h2>
              <p>
                Questions about these terms? Email{' '}
                <a href="mailto:contact@hapnn.com">contact@hapnn.com</a> or visit
                our <Link to="/contact">contact page</Link>. We're based in
                Toronto, Ontario, Canada.
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}
