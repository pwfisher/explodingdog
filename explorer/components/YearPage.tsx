import { PageLayout } from './PageLayout'
import { DrawingTile } from './DrawingTile'
import styled from 'styled-components'
import { YearBar } from './YearBar'
import { yearDrawingSets } from '../__fixtures__'

export const YearPage: React.FC<{ year: number }> = ({ year }) => {
  const drawings = yearDrawingSets[year]
  return (
    <PageLayout title={`explodingdog ${year}`}>
      <YearBar activeYear={year} />
      <YearHeading>{year}</YearHeading>
      <DrawingSection>
        {drawings && drawings.map(drawing => (
          <DrawingTile key={`${drawing.date} ${drawing.slug}`} {...drawing} />
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
