import imageUrlBuilder from '@sanity/image-url'
import { projectId, dataset } from './client.js'

const builder = imageUrlBuilder({ projectId, dataset })

export function urlFor(source) {
  return builder.image(source)
}
