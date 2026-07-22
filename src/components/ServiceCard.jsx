import { Link } from 'react-router-dom'

export default function ServiceCard({ svc }) {
  return (
    <article className="svc-card">
      <div className="svc-head-row">
        <span className="svc-num">{svc.num}</span>
      </div>
      <h3 className="svc-title disp">{svc.title}</h3>
      <ul className="svc-points">
        {svc.card.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      <div className="svc-foot">{svc.card.foot}</div>
      <Link className="svc-more" to={`/services/${svc.slug}`}>
        Explore {svc.title} →
      </Link>
    </article>
  )
}
