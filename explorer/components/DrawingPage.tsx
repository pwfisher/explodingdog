import React from 'react'
import { Drawing } from '../types'
import Link from 'next/link'
import { assetPrefix } from '../lib/assetPrefix'
import styled from 'styled-components'
import { getPreviousSlug, getNextSlug } from '../lib/drawings'
import { useRouter } from 'next/router'

export const DrawingPage: React.FC<{ drawing: Drawing, year: number }> = ({ drawing, year }) => {
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

  return (
    <Container onKeyDown={onKeyDown} tabIndex={-1}>
      <Title>{drawing.title}</Title>
      <ImageWrap>
        <Image src={`${assetPrefix}/images/${drawing.image}`} alt={drawing.title} />
      </ImageWrap>
      <NavBar>
        <Link href="/drawing/[id]" as={`/drawing/${getPreviousSlug(drawing.slug)}`}>
          <Arrow>&lt;</Arrow>
        </Link>
        <Link href="/year/[id]" as={`/year/${year}`}>
          <YearLink>{year}</YearLink>
        </Link>
        <a href={`http://explodingdog.com/title/${drawing.slug}.html`}>
          <DrawingId>#{drawing.id.split('.').slice(-1)}</DrawingId>
        </a>
        <Date>{drawing.date}</Date>
        <Link href="/drawing/[id]" as={`/drawing/${getNextSlug(drawing.slug)}`}>
          <Arrow>&gt;</Arrow>
        </Link>
      </NavBar>
    </Container>
  )
}

const Container = styled.main.attrs({ className: 'Explorer__DrawingPage__Container'})`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  max-height: 100vh;
`

const Title = styled.h1.attrs({ className: 'Explorer__DrawingPage__Title'})`
  font-size: 32px;
  font-weight: bold;
  padding: 16px 24px;
  text-align: center;
`

const ImageWrap = styled.figure.attrs({ className: 'Explorer__DrawingPage__ImageWrap'})`
  flex-grow: 1;
  position: relative;
`

const Image = styled.img.attrs({ className: 'Explorer__DrawingPage__Image'})`
  display: block;
  height: 100%;
  object-fit: contain;
  position: absolute;
  width: 100%;
`

const NavBar = styled.nav.attrs({ className: 'Explorer__DrawingPage__Header'})`
  color: #BBB;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-weight: bold;
  height: 40px;
  line-height: 40px;
`

const Arrow = styled.div.attrs({ className: 'Explorer__DrawingPage__Arrow'})`
  color: black;
  cursor: pointer;
  font-size: 24px;
  padding: 0 32px;
  user-select: none;

  &:hover {
    background: #f8f8f8;
  }
`

const YearLink = styled.a.attrs({ className: 'Explorer__DrawingPage__YearLink'})`
  cursor: pointer;
  color: black;
`

const DrawingId = styled.span.attrs({ className: 'Explorer__DrawingPage__DrawingId'})``

const Date = styled.span.attrs({ classNamne: 'Explorer__DrawingPage__Date'})``
