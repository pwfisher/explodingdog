import { Drawing } from '../types'
import { drawings } from '../__fixtures__/drawings'

export const getDrawingBySlug = (slug: string): Drawing | undefined => {
  return drawings.find(o => o.slug === slug)
}

export const getPreviousSlug = (slug: string): string => {
  const drawing = getDrawingBySlug(slug)
  if (!drawing) return 'something'
  const index = drawings.indexOf(drawing)
  const previousDrawing = drawings[index - 1] || drawings.slice(-1)[0]
  return previousDrawing.slug
}

export const getNextSlug = (slug: string): string => {
  const drawing = getDrawingBySlug(slug)
  if (!drawing) return 'something'
  const index = drawings.indexOf(drawing)
  const nextDrawing = drawings[index + 1] || drawings[0]
  return nextDrawing.slug
}
