import { Link } from 'react-router-dom'
import { urlFor } from '../lib/sanity/image.js'
import { formatDate } from '../lib/formatDate.js'

export default function BlogCard({ post }) {
  const category = post.categories?.[0]

  return (
    <article className="blog-card">
      <Link className="blog-card-media" to={`/blog/${post.slug}`}>
        {post.coverImage ? (
          <img
            src={urlFor(post.coverImage).width(640).height(420).fit('crop').auto('format').url()}
            alt={post.coverImage.alt || post.title}
            loading="lazy"
          />
        ) : (
          <div className="blog-card-media-fallback" aria-hidden="true" />
        )}
      </Link>
      <div className="blog-card-body">
        {category && <span className="chip">{category.title}</span>}
        <h3 className="disp blog-card-title">
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        {post.excerpt && <p className="blog-card-excerpt">{post.excerpt}</p>}
        <div className="blog-meta">
          {post.author?.name && <span>{post.author.name}</span>}
          {post.publishedAt && <span>{formatDate(post.publishedAt)}</span>}
        </div>
      </div>
    </article>
  )
}
