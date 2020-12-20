import React from 'react'
import { PageLayout } from './PageLayout'
import { DrawingTile } from './DrawingTile'
import Link from 'next/link'
import styled from 'styled-components'
import { getPreviousDay, getNextDay } from '../lib/drawings'
import { useRouter } from 'next/router'
import Div100vh from 'react-div-100vh'
import { dayDrawingSets } from '../__fixtures__'

export const DayPage: React.FC<{ day: string }> = ({ day }) => {
  const drawings = dayDrawingSets[day]
  const year = drawings[0].year
  const router = useRouter()
  const goToPrevious = () => router.push(`/day/${getPreviousDay(day)}`)
  const goToNext = () => router.push(`/day/${getNextDay(day)}`)

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
    <PageLayout title={`explodingdog ${day}`} showHeader={false} showFooter={false}>
      <Div100vh>
        <Container onKeyDown={onKeyDown} tabIndex={-1}>
          <DayHeading>{day}</DayHeading>
          <DrawingSection>
            {drawings && drawings.map(drawing => (
              <DrawingTile key={`${drawing.date} ${drawing.slug}`} {...drawing} />
            ))}
          </DrawingSection>
          <NavBar>
            <Link href="/day/[id]" as={`/day/${getPreviousDay(day)}`}>
              <Arrow>&lt;</Arrow>
            </Link>
            <Link href="/"><a>{'Home'}</a></Link>
            <Link href="/year/[id]" as={`/year/${year}`}>
              <YearLink>{year}</YearLink>
            </Link>
            <Link href="/day/[id]" as={`/day/${getNextDay(day)}`}>
              <Arrow>&gt;</Arrow>
            </Link>
          </NavBar>
        </Container>
      </Div100vh>
    </PageLayout>
  )
}

const Container = styled.main.attrs({ className: 'Explorer__DrawingPage__Container'})`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  max-height: 100%;
`

const DayHeading = styled.h1.attrs({ className: 'Explorer__DayPage__DayHeading'})`
  flex: 0 0 auto;
  font-size: 32px;
  padding: 12px 16px;
  text-align: center;
`

const DrawingSection = styled.section.attrs({ className: 'Explorer__DayPage__DrawingSection'})`
  flex: 1 1 0;
  overflow: scroll;
  text-align: center;
`

const NavBar = styled.nav.attrs({ className: 'Explorer__DrawingPage__Header'})`
  color: #BBB;
  display: flex;
  flex: 0 0 auto;
  justify-content: space-between;
  font-size: 18px;
  font-weight: bold;
  height: 80px;
  line-height: 80px;
`

const Arrow = styled.div.attrs({ className: 'Explorer__DrawingPage__Arrow'})`
  color: black;
  cursor: pointer;
  font-size: 36px;
  line-height: 74px;
  padding: 0 5%;
  user-select: none;

  &:hover {
    background: #f8f8f8;
  }
`

const YearLink = styled.a.attrs({ className: 'Explorer__DrawingPage__YearLink'})`
  cursor: pointer;
`
