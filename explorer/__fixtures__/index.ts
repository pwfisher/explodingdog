export * from './drawings'

import { TagDrawingSets } from '../types'
import tagDrawingSetsJson from './tagDrawingSets.json'

export const tagDrawingSets: TagDrawingSets = tagDrawingSetsJson as TagDrawingSets
export const tags: string[] = Object.keys(tagDrawingSets)
  .sort()
  .filter(tag => !['DoNotLike', 'HomePage'].includes(tag))
