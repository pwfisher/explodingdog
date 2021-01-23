import { PageLayout } from './PageLayout'
import styled from 'styled-components'
import { YearBar } from './YearBar'
import { yearDrawingSets } from '../__fixtures__'
import { DrawingSection } from './DrawingSection'
import { drawingHasTag } from '../lib/tags'

export const YearPage: React.FC<{ year: string }> = ({ year }) => {
  const drawings = yearDrawingSets[year].filter(drawing => !drawingHasTag(drawing, 'DoNotLike'))
  return (
    <PageLayout title={`explodingdog ${year}`}>
      <YearBar activeYear={year} />
      <YearHeading>{year}</YearHeading>
      <DrawingSection drawings={drawings} />
    </PageLayout>
  )
}

const YearHeading = styled.h1.attrs({ className: 'Explorer__YearPage__YearHeading'})`
  font-size: 64px;
  text-indent: 48px;
`
