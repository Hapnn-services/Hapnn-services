import { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { PortableText } from '@portabletext/react'
import useReveal from '../hooks/useReveal.js'
import useDocumentTitle from '../hooks/useDocumentTitle.js'
import { sanityClient, sanityConfigured } from '../lib/sanity/client.js'
import { POST_BY_SLUG_QUERY } from '../lib/sanity/queries.js'
import { urlFor } from '../lib/sanity/image.js'
import { formatDate } from '../lib/formatDate.js'
import CtaBanner from '../components/CtaBanner.jsx'

const portableTextComponents = {
  types: {
    image: ({ value }) => (
      <img
        className="blog-body-img"
        src={urlFor(value).width(1120).auto('format').url()}
        alt={value.alt || ''}
        loading="lazy"
      />
    ),
  },
}

export default function BlogPost() {
  const { slug } = useParams()
  const root = useRef(null)
  useReveal(root, [slug])

  const [post, setPost] = useState(undefined)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!sanityConfigured) return
    let cancelled = false
    setPost(undefined)
    setError(null)

    sanityClient
      .fetch(POST_BY_SLUG_QUERY, { slug })
      .then((data) => {
        if (!cancelled) setPost(data)
      })
      .catch((err) => {
        if (!cancelled) setError(err)
      })

    return () => {
      cancelled = true
    }
  }, [slug])

  useDocumentTitle(post ? `${post.title} — Hapnn Blog` : undefined)

  if (!sanityConfigured) {
    return (
      <div ref={root}>
        <section className="page-hero">
          <div className="wrap">
            <div className="blog-state" data-reveal>
              Blog content isn't connected yet — add the Sanity project
              details to your environment variables to start publishing.
            </div>
          </div>
        </section>
      </div>
    )
  }

  if (error) {
    return (
      <div ref={root}>
        <section className="page-hero">
          <div className="wrap">
            <div className="blog-state" data-reveal>
              Couldn't load this post right now. Please try again shortly.
            </div>
          </div>
        </section>
      </div>
    )
  }

  if (post === undefined) {
    return (
      <div ref={root}>
        <section className="page-hero">
          <div className="wrap">
            <div className="blog-state" data-reveal>
              Loading…
            </div>
          </div>
        </section>
      </div>
    )
  }

  if (!post) {
    return (
      <div ref={root}>
        <section className="page-hero">
          <div className="wrap">
            <div className="crumbs" data-reveal>
              <Link className="crumb-back" to="/blog">
                ← All posts
              </Link>
            </div>
            <h1 className="disp" data-reveal>
              Post not <span className="accent">found.</span>
            </h1>
            <p className="sec-sub" data-reveal>
              This post may have been moved or unpublished.
            </p>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div ref={root} key={post._id}>
      <section className="page-hero">
        <div className="wrap">
          <div className="crumbs" data-reveal>
            <Link className="crumb-back" to="/blog">
              ← All posts
            </Link>
            {post.categories?.map((cat) => (
              <span className="crumb-badge" key={cat.slug}>
                {cat.title}
              </span>
            ))}
          </div>
          <h1 className="disp" data-reveal>
            {post.title}
          </h1>
          <div className="blog-meta blog-meta-post" data-reveal>
            {post.author?.name && <span>{post.author.name}</span>}
            {post.publishedAt && <span>{formatDate(post.publishedAt)}</span>}
          </div>
        </div>
      </section>

      {post.coverImage && (
        <section className="blog-cover" data-reveal>
          <div className="wrap">
            <img
              src={urlFor(post.coverImage).width(1400).height(700).fit('crop').auto('format').url()}
              alt={post.coverImage.alt || post.title}
            />
          </div>
        </section>
      )}

      <section className="detail">
        <div className="wrap">
          <article className="blog-body" data-reveal>
            {post.body ? (
              <PortableText value={post.body} components={portableTextComponents} />
            ) : (
              <p>{post.excerpt}</p>
            )}
          </article>
        </div>
      </section>

      <CtaBanner />
    </div>
  )
}
