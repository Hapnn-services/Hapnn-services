import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'

const STATS = [
  { count: 24, suffix: '/7', label: 'Dispatch desk coverage — nights, weekends, holidays' },
  { count: 15, prefix: '<', suffix: ' min', label: 'Average response when a load goes sideways' },
  { count: 100, suffix: '%', label: 'Driver and unit files kept audit-ready' },
  { count: 1, suffix: '', label: 'Team for dispatch, books, and compliance — not three vendors' },
]

export default function Stats() {
  const root = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.stat-num .n').forEach((el) => {
        const target = parseInt(el.dataset.count, 10)
        const obj = { v: 0 }
        gsap.to(obj, {
          v: target,
          duration: 1.6,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 85%', once: true },
          onUpdate: () => {
            el.textContent = Math.round(obj.v)
          },
        })
      })
      gsap.from('.stat', {
        y: 50,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: { trigger: '.stats-grid', start: 'top 85%', once: true },
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section className="stats" id="numbers" ref={root}>
      <div className="wrap">
        <div className="sec-head">
          <span className="sec-tag">The numbers</span>
          <h2 className="sec-title disp">A parked truck earns nothing.</h2>
          <p className="sec-sub">
            Every hour a unit sits waiting on paperwork, a callback, or a
            missing file is revenue gone. We exist to make those hours
            disappear.
          </p>
        </div>
        <div className="stats-grid">
          {STATS.map((s) => (
            <div className="stat" key={s.label}>
              <div className="stat-num">
                {s.prefix && <span className="suf">{s.prefix}</span>}
                <span className="n" data-count={s.count}>
                  0
                </span>
                {s.suffix && <span className="suf">{s.suffix}</span>}
              </div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
