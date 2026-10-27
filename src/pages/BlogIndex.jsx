import { useEffect, useRef, useState } from 'react'
import useReveal from '../hooks/useReveal.js'
import useDocumentTitle from '../hooks/useDocumentTitle.js'
import { sanityClient, sanityConfigured } from '../lib/sanity/client.js'
import { POSTS_QUERY } from '../lib/sanity/queries.js'
import BlogCard from '../components/BlogCard.jsx'
import CtaBanner from '../components/CtaBanner.jsx'

export default function BlogIndex() {
  const root = useRef(null)
  useReveal(root, [])
  useDocumentTitle('Blog — Hapnn')

  const [posts, setPosts] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!sanityConfigured) return
    let cancelled = false

    sanityClient
      .fetch(POSTS_QUERY)
      .then((data) => {
        if (!cancelled) setPosts(data)
      })
      .catch((err) => {
        if (!cancelled) setError(err)
      })

    return () => {
      cancelled = true
    }
  }, [])

  return (
    <div ref={root}>
      <section className="page-hero">
        <div className="wrap">
          <div className="sec-head" style={{ marginBottom: 0 }}>
            <span className="sec-tag" data-reveal>
              Blog
            </span>
            <h1 className="sec-title disp" data-reveal>
              Notes from the <span className="accent">back office.</span>
            </h1>
            <p className="sec-sub" data-reveal>
              Dispatch, accounting, and compliance, from the desk that runs
              it every day.
            </p>
          </div>
        </div>
      </section>

      <section className="blog-list" style={{ paddingTop: 24 }}>
        <div className="wrap">
          {!sanityConfigured && (
            <div className="blog-state" data-reveal>
              Blog content isn't connected yet — add the Sanity project
              details to your environment variables to start publishing.
            </div>
          )}
          {sanityConfigured && error && (
            <div className="blog-state" data-reveal>
              Couldn't load posts right now. Please try again shortly.
            </div>
          )}
          {sanityConfigured && !error && posts === null && (
            <div className="blog-state" data-reveal>
              Loading posts…
            </div>
          )}
          {sanityConfigured && !error && posts?.length === 0 && (
            <div className="blog-state" data-reveal>
              No posts yet — check back soon.
            </div>
          )}
          {posts && posts.length > 0 && (
            <div className="blog-grid">
              {posts.map((post) => (
                <BlogCard key={post._id} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>

      <CtaBanner />
    </div>
  )
}
