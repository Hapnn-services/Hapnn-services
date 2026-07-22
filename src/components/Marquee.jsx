import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'

const ITEMS = [
  '24/7 Dispatch',
  'Rate negotiation',
  'IFTA filings',
  'Settlements',
  'Driver files',
  'ELD monitoring',
  'Audit prep',
  'Toronto, Canada',
]

function Part() {
  return (
    <div className="marquee-part" aria-hidden="true">
      {ITEMS.map((item) => (
        <span key={item}>
          {item} <b>·</b>
        </span>
      ))}
    </div>
  )
}

export default function Marquee() {
  const root = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.marquee-track', {
        xPercent: -50,
        ease: 'none',
        duration: 24,
        repeat: -1,
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <div className="marquee" ref={root}>
      <div className="marquee-track">
        <Part />
        <Part />
      </div>
    </div>
  )
}
