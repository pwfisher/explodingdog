import { Drawing, YearDrawingSets, DayDrawingSets, DayDrawingSetsByYear } from '../types'

export const drawingYears: string[] = [
  '2000',
  '2001',
  '2002',
  '2003',
  '2004',
  '2005',
  '2006',
  '2007',
  '2008',
  '2009',
  '2010',
  '2011',
  '2012',
  '2013',
  '2014',
  '2015',
]

export const yearDrawingSets: YearDrawingSets = drawingYears
  .sort()
  .reverse()
  .reduce((accumulator, year) => {
    const rawYearSet = require(`./drawings/${year}.json`)
    const processedYearSet: Drawing[] = rawYearSet.map((drawing: any) => {
      const [year, number] = drawing.id.split('.')
      return { ...drawing, year, number }
    })
    accumulator[year] = processedYearSet.sort((a, b) => parseInt(b.number) - parseInt(a.number))
    return accumulator
  }, {} as any) as YearDrawingSets

export const drawings: Drawing[] = drawingYears.reduce((accumulator, year) => {
  return [...accumulator, ...yearDrawingSets[year]] as Drawing[]
}, [] as Drawing[])

export const dayDrawingSets: DayDrawingSets = drawings.reduce((accumulator, drawing) => {
  if (!accumulator[drawing.date]) accumulator[drawing.date] = []
  accumulator[drawing.date].push(drawing)
  return accumulator
}, {} as any) as DayDrawingSets

export const drawingDays: string[] = Object.keys(dayDrawingSets).sort().reverse()

export const dayDrawingSetsByYear: DayDrawingSetsByYear = drawingDays.reduce((accumulator, date) => {
  const year = parseInt(date.slice(0, 4), 10)
  if (!accumulator[year]) accumulator[year] = {}
  accumulator[year][date] = dayDrawingSets[date]
  return accumulator
}, {} as any) as DayDrawingSetsByYear
