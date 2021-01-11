import React from 'react'
import { Drawing } from '../../types'
import Link from 'next/link'
import { assetPrefix } from '../../lib/assetPrefix'
import {
  Container,
  Title,
  ImageWrap,
  Image,
  NavBar,
  ArrowButton,
  LeftArrow,
  RightArrow,
  DrawingLink,
  YearLink,
  DateLink,
  TagList,
  Tag,
} from './styles'
import { getPreviousSlug, getNextSlug } from '../../lib/drawings'
import { useRouter } from 'next/router'
import Div100vh from 'react-div-100vh'
import { PageLayout } from '../PageLayout'
import { ActionsMenu } from './ActionsMenu'
import { getTagsForDrawing } from '../../lib/tags'
import { MyTagsContainer } from '../../containers/MyTags'
import { getTagSlug } from '../../lib/tags'

export const DrawingPage: React.FC<{ drawing: Drawing, year: number }> = ({ drawing, year }) => {
  const { getMyTagsForDrawing } = MyTagsContainer.useContainer()
  const router = useRouter()

  const goToPrevious = () => router.push(`/drawing/${getPreviousSlug(drawing.slug)}`)
  const goToNext = () => router.push(`/drawing/${getNextSlug(drawing.slug)}`)

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const handler = ({
      ArrowUp: goToPrevious,
      ArrowDown: goToNext,
      ArrowLeft: goToPrevious,
      ArrowRight: goToNext,
    } as Record<string, Function>)[event.key]
    handler?.()
  }

  const tags = getTagsForDrawing(drawing)
  const myTags = getMyTagsForDrawing(drawing)

  return (
    <PageLayout title={drawing.title} showHeader={false} showFooter={false}>
      <Div100vh>
        <Container onKeyDown={onKeyDown} tabIndex={-1}>
          <Title>{drawing.title}</Title>
          <ImageWrap>
            <Image src={`${assetPrefix}/images/${drawing.image}`} alt={drawing.title} />
          </ImageWrap>
          {tags.length > 0 && (
            <TagList>
              {tags.map(tag => (
                <Tag key={tag}>
                  <Link href='/tag/[id]' as={`/tag/${getTagSlug(tag)}`}>
                    <a>{tag}</a>
                  </Link>
                </Tag>
              ))}
            </TagList>
          )}
          {myTags.length > 0 && <TagList>{myTags.map(tag => <Tag key={tag}>{tag}</Tag>)}</TagList>}
          <NavBar>
            <Link href="/drawing/[id]" as={`/drawing/${getPreviousSlug(drawing.slug)}`}>
              <ArrowButton title='Previous'><LeftArrow /></ArrowButton>
            </Link>
            <DrawingLink title='Source' href={`http://explodingdog.com/title/${drawing.slug}.html`}>
              <b>#{drawing.number}</b>
            </DrawingLink>
            <Link href="/year/[id]" as={`/year/${year}`}>
              <YearLink title={`Drawings for ${drawing.year}`}><b>{year}</b></YearLink>
            </Link>
            <Link href="/day/[id]" as={`/day/${drawing.date}`}>
              <DateLink title={`Drawings for ${drawing.date}`}><b>{drawing.date.slice(5)}</b></DateLink>
            </Link>
            <ActionsMenu drawing={drawing} />
            <Link href="/drawing/[id]" as={`/drawing/${getNextSlug(drawing.slug)}`}>
              <ArrowButton title='Next'><RightArrow /></ArrowButton>
            </Link>
          </NavBar>
        </Container>
      </Div100vh>
    </PageLayout>
  )
}
