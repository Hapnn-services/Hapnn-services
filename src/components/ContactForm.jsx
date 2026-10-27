import { useEffect, useRef, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import emailjs from '@emailjs/browser'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY

const SERVICE_OPTIONS = [
  { value: 'general', label: 'General inquiry' },
  { value: 'dispatch', label: 'Dispatch' },
  { value: 'accounting', label: 'Accounting' },
  { value: 'safety-compliance', label: 'Safety & Compliance' },
]

const FLEET_OPTIONS = ['1–5 trucks', '6–15 trucks', '16–50 trucks', '50+ trucks']

let recaptchaScriptPromise = null
function loadRecaptchaScript() {
  if (recaptchaScriptPromise) return recaptchaScriptPromise
  recaptchaScriptPromise = new Promise((resolve, reject) => {
    if (window.grecaptcha?.render) {
      resolve(window.grecaptcha)
      return
    }
    const existing = document.getElementById('recaptcha-script')
    if (existing) {
      existing.addEventListener('load', () => resolve(window.grecaptcha))
      existing.addEventListener('error', () => reject(new Error('reCAPTCHA script failed to load')))
      return
    }
    const script = document.createElement('script')
    script.id = 'recaptcha-script'
    script.src = 'https://www.google.com/recaptcha/api.js?render=explicit'
    script.async = true
    script.defer = true
    script.onload = () => resolve(window.grecaptcha)
    script.onerror = () => reject(new Error('reCAPTCHA script failed to load'))
    document.head.appendChild(script)
  })
  return recaptchaScriptPromise
}

export default function ContactForm() {
  const formRef = useRef(null)
  const recaptchaRef = useRef(null)
  const widgetIdRef = useRef(null)
  const [status, setStatus] = useState('idle') // idle | sending | success | error | captcha
  const [params] = useSearchParams()

  const initialService = SERVICE_OPTIONS.some((o) => o.value === params.get('service'))
    ? params.get('service')
    : 'general'

  useEffect(() => {
    if (!RECAPTCHA_SITE_KEY || !recaptchaRef.current) return
    let cancelled = false

    const mount = (grecaptcha) => {
      if (cancelled || !recaptchaRef.current || widgetIdRef.current !== null) return
      widgetIdRef.current = grecaptcha.render(recaptchaRef.current, {
        sitekey: RECAPTCHA_SITE_KEY,
      })
    }

    loadRecaptchaScript()
      .then((grecaptcha) => {
        if (cancelled) return
        // grecaptcha.render() isn't guaranteed to work until the API
        // signals it's fully initialized — skipping this caused
        // "Invalid reCAPTCHA client id: null" when render() silently
        // no-op'd and widgetIdRef never got set.
        grecaptcha.ready(() => mount(grecaptcha))
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error('reCAPTCHA failed to load:', err)
      })

    return () => {
      cancelled = true
    }
  }, [])

  function getCaptchaToken() {
    if (widgetIdRef.current === null || !window.grecaptcha) return ''
    try {
      return window.grecaptcha.getResponse(widgetIdRef.current) || ''
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('reCAPTCHA getResponse failed:', err)
      return ''
    }
  }

  function resetCaptcha() {
    if (!RECAPTCHA_SITE_KEY || widgetIdRef.current === null || !window.grecaptcha) return
    try {
      window.grecaptcha.reset(widgetIdRef.current)
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('reCAPTCHA reset failed:', err)
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const form = formRef.current

    // Honeypot — real visitors never fill this field.
    if (form.company_website.value) {
      form.reset()
      setStatus('success')
      return
    }

    // The form uses noValidate, so enforce the `required` fields here.
    if (!form.reportValidity()) return

    if (RECAPTCHA_SITE_KEY && !getCaptchaToken()) {
      setStatus('captcha')
      return
    }

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      // eslint-disable-next-line no-console
      console.error(
        'EmailJS is not configured. Set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in .env',
      )
      setStatus('error')
      return
    }

    setStatus('sending')
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, { publicKey: PUBLIC_KEY })
      setStatus('success')
      form.reset()
      resetCaptcha()
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('EmailJS send failed:', err)
      setStatus('error')
      resetCaptcha()
    }
  }

  if (status === 'success') {
    return (
      <div className="form-done">
        <span className="form-done-dot" />
        <h4 className="disp">Message sent.</h4>
        <p>
          Thanks for reaching out — a real person will get back to you within
          one business day.
        </p>
        <button
          type="button"
          className="btn btn-ghost btn-sm"
          onClick={() => setStatus('idle')}
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form ref={formRef} className="contact-form" onSubmit={handleSubmit} noValidate>
      {/* honeypot — hidden from real visitors, catches simple bots */}
      <input
        type="text"
        name="company_website"
        className="hp-field"
        tabIndex="-1"
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="form-row">
        <div className="field">
          <label htmlFor="from_name">
            Full name<span className="req">*</span>
          </label>
          <input id="from_name" name="from_name" type="text" required autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="reply_to">
            Email<span className="req">*</span>
          </label>
          <input id="reply_to" name="reply_to" type="email" required autoComplete="email" />
        </div>
      </div>

      <div className="form-row">
        <div className="field">
          <label htmlFor="company">Company name</label>
          <input id="company" name="company" type="text" autoComplete="organization" />
        </div>
        <div className="field">
          <label htmlFor="phone">
            Phone<span className="req">*</span>
          </label>
          <input id="phone" name="phone" type="tel" required autoComplete="tel" />
        </div>
      </div>

      <div className="form-row">
        <div className="field">
          <label htmlFor="service">What do you need help with?</label>
          <select id="service" name="service" defaultValue={initialService}>
            {SERVICE_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="fleet_size">Fleet size</label>
          <select id="fleet_size" name="fleet_size" defaultValue="">
            <option value="" disabled>
              Select a range
            </option>
            {FLEET_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="field">
        <label htmlFor="message">
          Message<span className="req">*</span>
        </label>
        <textarea id="message" name="message" rows="5" required />
      </div>

      {RECAPTCHA_SITE_KEY && (
        <div className="recaptcha-wrap">
          <div ref={recaptchaRef} />
        </div>
      )}

      <div className="form-actions">
        <button className="btn btn-primary" type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Send message'}
        </button>
        {status === 'captcha' && (
          <p className="form-error">Please confirm you're not a robot.</p>
        )}
        {status === 'error' && (
          <p className="form-error">
            Something went wrong. Please try again, or email us directly at{' '}
            <a href="mailto:contact@hapnn.com">contact@hapnn.com</a>.
          </p>
        )}
      </div>

      <p className="form-legal">
        By submitting, you agree to our{' '}
        <Link to="/privacy-policy">Privacy Policy</Link> and{' '}
        <Link to="/terms-and-conditions">Terms &amp; Conditions</Link>.
      </p>
    </form>
  )
}
