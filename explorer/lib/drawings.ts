import { YearDrawingSets, Drawing } from '../types'
import { drawingYears } from '../__fixtures__/drawings'

export const getYearDrawingSets = (): YearDrawingSets => {
  return drawingYears.reduce((accumulator, year) => {
    accumulator[year] = require(`../__fixtures__/drawings/${year}.json`)
    return accumulator
  }, {} as Partial<YearDrawingSets>) as YearDrawingSets
}

export const getYearDrawingSet = (year: number): Drawing[] => {
  return require(`../__fixtures__/drawings/${year}.json`)
}
