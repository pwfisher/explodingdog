import { Drawing, YearDrawingSets, DayDrawingSets } from '../types'

export const drawingYears: number[] = [
  2000,
  2001,
  2002,
  2003,
  2004,
  2005,
  2006,
  2007,
  2008,
  2009,
  2010,
  2011,
  2012,
  2013,
  2014,
  2015,
]

export const yearDrawingSets: YearDrawingSets = drawingYears
  .sort()
  .reverse()
  .reduce((accumulator, year) => {
    const rawYearSet = require(`./drawings/${year}.json`)
    const processedYearSet = rawYearSet.map((drawing: any) => {
      const [year, number] = drawing.id.split('.')
      return { ...drawing, year, number }
    })
    accumulator[year] = (processedYearSet as Drawing[]).sort((a, b) => b.number - a.number)
    return accumulator
  }, {} as Partial<YearDrawingSets>) as YearDrawingSets

export const drawings: Drawing[] = drawingYears.reduce((accumulator, year) => {
  return [...accumulator, ...yearDrawingSets[year]] as Drawing[]
}, [] as Drawing[])

export const dayDrawingSets: DayDrawingSets = drawings.reduce((accumulator, drawing) => {
  if (!accumulator[drawing.date]) accumulator[drawing.date] = []
  accumulator[drawing.date]!.push(drawing)
  return accumulator
}, {} as Partial<DayDrawingSets>) as DayDrawingSets

export const drawingDays: string[] = Object.keys(dayDrawingSets).sort().reverse()
