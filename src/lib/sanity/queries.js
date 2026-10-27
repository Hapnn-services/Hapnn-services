export const POSTS_QUERY = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc){
  _id,
  title,
  "slug": slug.current,
  excerpt,
  coverImage,
  publishedAt,
  "author": author->{name, "slug": slug.current, image},
  "categories": categories[]->{title, "slug": slug.current}
}`

export const POST_BY_SLUG_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  excerpt,
  coverImage,
  publishedAt,
  body,
  "author": author->{name, "slug": slug.current, image, bio},
  "categories": categories[]->{title, "slug": slug.current}
}`
