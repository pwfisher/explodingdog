import { PageLayout } from './PageLayout'
import styled from 'styled-components'
import { DrawingSection } from './DrawingSection'
import { MyTagsContainer } from '../containers/MyTags'
import { NextPage } from 'next'

export const MyTagPage: NextPage<{ slug: string }> = ({ slug }) => {
  const { getMyTagFromSlug, getDrawingsForTag } = MyTagsContainer.useContainer()

  const tag = getMyTagFromSlug(slug)
  if (!tag) return <p>{`Not Found: tag ${tag} not in myTags.`}</p>

  const drawings = getDrawingsForTag(tag)
  if (!drawings) return <p>{`Error: getDrawingsForTag(${tag}) returned ${drawings}`}</p>

  return (
    <PageLayout title={`explodingdog ${tag}`}>
      <PageHeading>{tag}</PageHeading>
      <DrawingSection {...{ drawings }} />
    </PageLayout>
  )
}

const PageHeading = styled.h1.attrs({ className: 'Explorer__MyTagPage__PageHeading'})`
  font-size: 64px;
  text-indent: 48px;
`
