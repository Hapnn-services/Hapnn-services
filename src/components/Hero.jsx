import { useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'

export default function Hero() {
  const root = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })
      tl.from('.hero-line > span', {
        yPercent: 115,
        duration: 1,
        stagger: 0.12,
      })
        .from('.hero-badge', { y: 14, opacity: 0, duration: 0.5 }, '-=0.7')
        .from(
          ['.hero-sub', '.hero-ctas', '.hero-chips'],
          { y: 24, opacity: 0, stagger: 0.1, duration: 0.6 },
          '-=0.5',
        )
        .from('.hero-frame', { y: 32, opacity: 0, duration: 0.9 }, '-=0.7')
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section className="hero" ref={root}>
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <div className="hero-badge">
            <span className="pill pill-dot">Toronto, Canada — On duty 24/7</span>
          </div>
          <h1 className="disp">
            <div className="hero-line">
              <span>We run the</span>
            </div>
            <div className="hero-line">
              <span className="accent">back office.</span>
            </div>
            <div className="hero-line">
              <span>You run the roads.</span>
            </div>
          </h1>
          <p className="hero-sub">
            Dispatch that never sleeps, books that balance themselves, and
            files that pass every audit, one team behind your whole
            operation, whether you pull long-haul lanes or turn last-mile
            routes before sunrise.
          </p>
          <div className="hero-ctas">
            <Link className="btn btn-primary" to="/contact">
              Book a call
            </Link>
            <a className="btn btn-ghost" href="#services">
              See what we handle
            </a>
          </div>
          <div className="hero-chips">
            <span className="chip">24/7 dispatch desk</span>
            <span className="chip">Audit-ready, always</span>
            <span className="chip">Per-truck P&L</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-frame">
            <img
              className="hero-image"
              src="/truck-img.jpg"
              alt="Hapnn — dispatch, accounting, and compliance for fleet operations"
              width="800"
              height="600"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
