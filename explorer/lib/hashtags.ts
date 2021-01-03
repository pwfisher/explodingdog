import { Drawing, TagDrawingSets } from '../types'

export function loadTagDrawingSets(): TagDrawingSets {
  if (typeof window === 'undefined') return {} as TagDrawingSets
  return JSON.parse(localStorage.getItem('tagDrawingSets') || '{}') as TagDrawingSets
}

export function saveTagDrawingSets(tagDrawingSets: TagDrawingSets) {
  saveTagDrawingSetsString(JSON.stringify(tagDrawingSets || {}))
}

export function saveTagDrawingSetsString(value: string) {
  localStorage.setItem('tagDrawingSets', value)
}

export function drawingHasTag(drawing: Drawing, tag: string) {
  const tagDrawingSets: TagDrawingSets = loadTagDrawingSets()
  const drawings: Drawing[] = tagDrawingSets[tag] ?? []
  return drawings.some(o => o.slug === drawing.slug)
}

export function addTagToDrawing(tag: string, drawing: Drawing) {
  const tagDrawingSets: TagDrawingSets = loadTagDrawingSets()
  const drawings: Drawing[] = tagDrawingSets[tag] ?? []
  if (!drawings.includes(drawing)) {
    drawings.push(drawing)
    tagDrawingSets[tag] = drawings
    saveTagDrawingSets(tagDrawingSets)
  }
}

export function removeTagFromDrawing(tag: string, drawing: Drawing) {
  const tagDrawingSets: TagDrawingSets = loadTagDrawingSets()
  const drawings: Drawing[] | undefined = tagDrawingSets[tag]
  if (!drawings) return
  tagDrawingSets[tag] = drawings.filter(o => o.slug !== drawing.slug)
  if (!tagDrawingSets[tag].length) delete tagDrawingSets[tag]
  saveTagDrawingSets(tagDrawingSets)
}
