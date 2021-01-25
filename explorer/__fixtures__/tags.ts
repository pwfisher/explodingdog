import { TagDrawingSets } from '../types'
import tagDrawingSetsJson from './tagDrawingSets.json'

/**
 * Tags are mostly lowercase, but not always. Exceptions include "DoNotList" and "HomePage".
 * Tags may include spaces. These become dashes in slugs.
 */

const unlistedTags = ['DoNotList', 'HomePage']

export const tagDrawingSets: TagDrawingSets = tagDrawingSetsJson as TagDrawingSets
export const allTags: string[] = Object.keys(tagDrawingSets).sort()
export const tags: string[] = allTags.filter(tag => !unlistedTags.includes(tag))
