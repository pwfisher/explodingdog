import { Drawing } from '../types/drawing-models'
import { PageLayout } from './PageLayout'
import { DrawingTile } from './DrawingTile'
import styled from 'styled-components'

export const YearPage = ({ year, drawings }: {
  year: number
  drawings?: Drawing[]
}) => {
  return (
    <PageLayout title={`explodingdog ${year}`}>
      <Heading>{year}</Heading>
      <DrawingSection>
        {drawings && drawings.map(drawing => (
          <DrawingTile {...drawing} />
        ))}
      </DrawingSection>
    </PageLayout>
  )
}

const Heading = styled.h1.attrs({ className: 'Explorer__YearPage__Heading'})`
  font-size: 64px;
  text-indent: 48px;
`

const DrawingSection = styled.section.attrs({ className: 'Explorer__YearPage__DrawingSection'})`
  text-align: center;
`
