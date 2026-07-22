import { Link } from 'react-router-dom'

export default function PrivacyPolicy() {
  return (
    <div>
      <section className="page-hero">
        <div className="wrap">
          <div className="sec-head" style={{ marginBottom: 0 }}>
            <span className="sec-tag">Legal</span>
            <h1 className="disp">
              Privacy <span className="accent">Policy.</span>
            </h1>
            <p className="legal-updated">Last updated: July 21, 2026</p>
            <p className="sec-sub">
              This policy explains what information Hapnn collects through
              this website, why we collect it, and how it's handled. It
              applies to hapnn.com and doesn't cover any separate service
              agreement you may sign with us.
            </p>
          </div>
        </div>
      </section>

      <section className="detail">
        <div className="wrap">
          <article className="legal">
            <div className="legal-section">
              <h2>1. Who we are</h2>
              <p>
                Hapnn ("Hapnn," "we," "us") provides dispatch, accounting, and
                safety &amp; compliance support for fleet operators, based in
                Toronto, Ontario, Canada. This policy covers the personal
                information we collect when you visit this website or submit
                the contact form.
              </p>
            </div>

            <div className="legal-section">
              <h2>2. Information we collect</h2>
              <p>When you fill out the contact form, we collect:</p>
              <ul>
                <li>Your full name and email address</li>
                <li>Your phone number</li>
                <li>Your company name, if provided</li>
                <li>The service you're inquiring about and your fleet size, if provided</li>
                <li>The message you write to us</li>
              </ul>
              <p>
                We don't require you to create an account, and we don't
                collect payment information through this website. Our
                hosting provider and analytics-free web server logs may
                record standard technical data such as your IP address,
                browser type, and pages visited, in the ordinary course of
                operating the site.
              </p>
            </div>

            <div className="legal-section">
              <h2>3. How we use your information</h2>
              <p>We use the information you submit to:</p>
              <ul>
                <li>Respond to your inquiry and follow up about our services</li>
                <li>Understand your operation well enough to scope dispatch, accounting, or compliance support</li>
                <li>Keep a record of our communications with you</li>
                <li>Protect the site against spam and abusive submissions</li>
              </ul>
              <p>We do not sell your personal information, and we do not use it for advertising.</p>
            </div>

            <div className="legal-section">
              <h2>4. How we share your information</h2>
              <p>We rely on two third-party services to run the contact form:</p>
              <ul>
                <li>
                  <strong>EmailJS</strong> — delivers your form submission to
                  our inbox. EmailJS processes the data you enter solely to
                  send that email.
                </li>
                <li>
                  <strong>Google reCAPTCHA</strong> — verifies that a form
                  submission is coming from a human, not a bot. Google
                  processes some technical data (such as your IP address and
                  browser behaviour) to make that determination.
                </li>
              </ul>
              <p>
                Both providers act as data processors on our behalf and are
                bound by their own privacy policies — see{' '}
                <a href="https://www.emailjs.com/legal/privacy-policy/" target="_blank" rel="noreferrer">
                  EmailJS's privacy policy
                </a>{' '}
                and{' '}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">
                  Google's privacy policy
                </a>
                . We otherwise share personal information only when required by law, or with your consent.
              </p>
            </div>

            <div className="legal-section">
              <h2>5. Cookies and similar technologies</h2>
              <p>
                This website doesn't run analytics or advertising trackers.
                The Google reCAPTCHA widget on our contact page sets cookies
                in your browser as part of its own fraud-detection process;
                that use is governed by Google's privacy policy, linked
                above.
              </p>
            </div>

            <div className="legal-section">
              <h2>6. Data retention</h2>
              <p>
                We keep contact form submissions for as long as reasonably
                necessary to respond to your inquiry and maintain a record of
                our business communications, after which we delete or
                anonymize it unless we're required to retain it longer.
              </p>
            </div>

            <div className="legal-section">
              <h2>7. Data security</h2>
              <p>
                We take reasonable technical and organizational steps to
                protect the information you share with us. No method of
                transmission or storage is completely secure, so we can't
                guarantee absolute security.
              </p>
            </div>

            <div className="legal-section">
              <h2>8. Your privacy rights</h2>
              <p>
                Under Canada's Personal Information Protection and Electronic
                Documents Act (PIPEDA), you can ask us what personal
                information we hold about you, request corrections, or ask us
                to delete it. To do any of that, email{' '}
                <a href="mailto:contact@hapnn.com">contact@hapnn.com</a> and
                we'll respond within a reasonable time.
              </p>
            </div>

            <div className="legal-section">
              <h2>9. Children's privacy</h2>
              <p>
                This website is intended for business use by fleet operators
                and their staff. We don't knowingly collect personal
                information from children.
              </p>
            </div>

            <div className="legal-section">
              <h2>10. International data transfers</h2>
              <p>
                EmailJS and Google operate infrastructure in multiple
                countries, so information you submit may be processed on
                servers located outside of Canada, subject to the laws of
                those jurisdictions.
              </p>
            </div>

            <div className="legal-section">
              <h2>11. Changes to this policy</h2>
              <p>
                We may update this policy from time to time. Changes take
                effect once posted here, with the "last updated" date above
                revised accordingly.
              </p>
            </div>

            <div className="legal-section">
              <h2>12. Contact us</h2>
              <p>
                Questions about this policy or your information? Email{' '}
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
