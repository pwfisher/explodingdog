import { Drawing, TagDrawingSets } from '../types'
import { allTags, tagDrawingSets, tags } from '../__fixtures__'

export function getTagsForDrawing(drawing: Drawing): string[] {
  return tags.filter(tag => drawingHasTag(drawing, tag))
}

export function drawingHasTag(drawing: Drawing, tag: string): boolean {
  const drawings: Drawing[] = tagDrawingSets[tag] ?? []
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

export function getTagSlug(tag: string): string {
  return tag.toLocaleLowerCase().trim().replace(/\s+/g, '-')
}

export function getTagFromSlug(slug: string): string | undefined {
  return allTags.find(tag => getTagSlug(tag) === slug)
}
