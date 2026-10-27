const dateFormatter = new Intl.DateTimeFormat('en-CA', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
})

export function formatDate(isoDate) {
  if (!isoDate) return ''
  return dateFormatter.format(new Date(isoDate))
}
