import { Drawing, TagDrawingSets } from '../types'
import {
  tagDrawingSets as fixtureTagDrawingSets,
  tags as fixtureTags,
} from '../__fixtures__'

export function getTagsForDrawing(drawing: Drawing): string[] {
  return fixtureTags.filter(tag => drawingHasTag(drawing, tag))
}

export function drawingHasTag(drawing: Drawing, tag: string): boolean {
  const drawings: Drawing[] = fixtureTagDrawingSets[tag] ?? []
  return drawings.some(o => o.id === drawing.id)
}

export function loadMyTagDrawingSets(): TagDrawingSets {
  if (typeof window === 'undefined') return {} as TagDrawingSets
  return JSON.parse(localStorage.getItem('tagDrawingSets') || '{}') as TagDrawingSets
}

export function duplicateTagDrawingSets(original: TagDrawingSets): TagDrawingSets {
  return Object.keys(original).reduce<TagDrawingSets>((accumulator, tag) => {
    accumulator[tag] = [...original[tag]]
    return accumulator
  }, {})
}
