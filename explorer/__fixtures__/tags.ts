import { TagDrawingSets } from '../types'
import tagDrawingSetsJson from './tagDrawingSets.json'

const unlistedTags = ['DoNotLike', 'HomePage']

export const tagDrawingSets: TagDrawingSets = tagDrawingSetsJson as TagDrawingSets
export const allTags: string[] = Object.keys(tagDrawingSets).sort()
export const tags: string[] = allTags.filter(tag => !unlistedTags.includes(tag))
