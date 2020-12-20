import React from 'react'
import { PageLayout } from './PageLayout'
import { DrawingTile } from './DrawingTile'
import styled from 'styled-components'
import { YearBar } from './YearBar'
import { dayDrawingSetsByYear } from '../__fixtures__/drawings'

export const YearPage: React.FC<{ year: number }> = ({ year }) => {
  const dayDrawingSets = dayDrawingSetsByYear[year]
  const dates = Object.keys(dayDrawingSets)
  return (
    <PageLayout title={`explodingdog ${year}`}>
      <YearBar activeYear={year} />
      <YearHeading>{year}</YearHeading>
      <DrawingSection>
        {dates.map(date => (
          <DrawingDate>
            <DrawingDateHeading>{date}</DrawingDateHeading>
            <DrawingDateTiles>
              {dayDrawingSets[date].map(drawing => (
                <DrawingTile key={`${drawing.date} ${drawing.slug}`} {...drawing} />
              ))}
            </DrawingDateTiles>
          </DrawingDate>
        ))}
      </DrawingSection>
    </PageLayout>
  )
}

const YearHeading = styled.h1.attrs({ className: 'Explorer__YearPage__YearHeading'})`
  font-size: 64px;
  text-indent: 48px;
`

const DrawingSection = styled.section.attrs({ className: 'Explorer__YearPage__DrawingSection'})`
  text-align: center;
`

const DrawingDate = styled.div.attrs({ className: 'Explorer__YearPage__DrawingDate'})`
  margin: 24px 0 48px;
`

const DrawingDateHeading = styled.h3.attrs({ className: 'Explorer__YearPage__DrawingDateHeading'})`
  align-items: center;
  color: #BBB;
  display: flex;
  height: 48px;
  justify-content: center;
  margin: 0;
`

const DrawingDateTiles = styled.div.attrs({ className: 'Explorer__YearPage__DrawingDateTiles'})``
