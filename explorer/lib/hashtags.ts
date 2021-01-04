import { Drawing, TagDrawingSets } from '../types'
import { tagDrawingSets as fixtureTagDrawingSets } from '../__fixtures__'

export function loadMyTagDrawingSets(): TagDrawingSets {
  if (typeof window === 'undefined') return {} as TagDrawingSets
  return JSON.parse(localStorage.getItem('tagDrawingSets') || '{}') as TagDrawingSets
}

export function saveMyTagDrawingSets(tagDrawingSets: TagDrawingSets): void {
  saveMyTagDrawingSetsString(JSON.stringify(tagDrawingSets || {} as TagDrawingSets))
}

export function saveMyTagDrawingSetsString(value: string): void {
  localStorage.setItem('tagDrawingSets', value)
}

export function drawingHasMyTag(drawing: Drawing, tag: string): boolean {
  const tagDrawingSets: TagDrawingSets = loadMyTagDrawingSets()
  const drawings: Drawing[] = tagDrawingSets[tag] ?? []
  return drawings.some(o => o.id === drawing.id)
}

export function addMyTagToDrawing(tag: string, drawing: Drawing): void {
  const tagDrawingSets: TagDrawingSets = loadMyTagDrawingSets()
  const drawings: Drawing[] = tagDrawingSets[tag] ?? []
  if (!drawings.some(o => o.id === drawing.id)) {
    drawings.push(drawing)
    tagDrawingSets[tag] = drawings
    saveMyTagDrawingSets(tagDrawingSets)
  }
}

export function removeMyTagFromDrawing(tag: string, drawing: Drawing): void {
  const tagDrawingSets: TagDrawingSets = loadMyTagDrawingSets()
  const drawings: Drawing[] | undefined = tagDrawingSets[tag]
  if (!drawings) return
  tagDrawingSets[tag] = drawings.filter(o => o.id !== drawing.id)
  if (!tagDrawingSets[tag].length) delete tagDrawingSets[tag]
  saveMyTagDrawingSets(tagDrawingSets)
}

export function getMyTags(): string[] {
  const tagDrawingSets: TagDrawingSets = loadMyTagDrawingSets()
  return Object.keys(tagDrawingSets)
}

export function getMyTagsForDrawing(drawing: Drawing): string[] {
  return getMyTags().filter(tag => drawingHasMyTag(drawing, tag))
}

export function getFixtureTagsForDrawing(drawing: Drawing): string[] {
  return getFixtureTags().filter(tag => drawingHasFixtureTag(drawing, tag))
}

export function getFixtureTags(): string[] {
  return Object.keys(fixtureTagDrawingSets)
}

export function drawingHasFixtureTag(drawing: Drawing, tag: string): boolean {
  const drawings: Drawing[] = fixtureTagDrawingSets[tag] ?? []
  return drawings.some(o => o.id === drawing.id)
}
