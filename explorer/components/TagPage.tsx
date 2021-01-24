import { PageLayout } from './PageLayout'
import styled from 'styled-components'
import { tagDrawingSets } from '../__fixtures__'
import { DrawingSection } from './DrawingSection'

export const TagPage: React.FC<{ tag: string }> = ({ tag }) => {
  const drawings = tagDrawingSets[tag]
  return (
    <PageLayout title={`explodingdog ${tag}`}>
      <PageHeading>{tag}</PageHeading>
      <DrawingSection {...{ drawings }} />
    </PageLayout>
  )
}

const PageHeading = styled.h1.attrs({ className: 'Explorer__TagPage__PageHeading'})`
  font-size: 64px;
  text-indent: 48px;
`
