import { createClient } from '@sanity/client'

export const projectId = import.meta.env.VITE_SANITY_PROJECT_ID
export const dataset = import.meta.env.VITE_SANITY_DATASET || 'production'
export const apiVersion = import.meta.env.VITE_SANITY_API_VERSION || '2026-01-01'

export const sanityConfigured = Boolean(projectId)

// createClient throws without a projectId, so only build it when configured.
export const sanityClient = sanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
    })
  : null
