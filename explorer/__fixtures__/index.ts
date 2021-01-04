export * from './drawings'

import { TagDrawingSets } from '../types'
import tagDrawingSetsJson from './tagDrawingSets.json'

export const tagDrawingSets: TagDrawingSets = tagDrawingSetsJson as TagDrawingSets
