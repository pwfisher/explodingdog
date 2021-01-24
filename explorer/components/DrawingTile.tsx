import React from 'react'
import { Drawing } from '../types/drawing-models'
import styled from 'styled-components'
import { assetPrefix } from '../lib/assetPrefix'
import Link from 'next/link'

export const DrawingTile: React.FC<Drawing> = ({ date, title, slug, image }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Link href={`/drawing/${slug}`}>
        <a><Image src={`${assetPrefix}/images/${image}`} alt={title} loading='lazy' /></a>
      </Link>
      <Link href={`/day/${date}`}><Date>{date}</Date></Link>
    </Container>
  )
}

const Container = styled.div.attrs({ className: 'Explorer__DrawingTile__Container'})`
  display: inline-block;
  padding: 24px 12px;
  position: relative;
  width: 250px;
`

const Date = styled.div.attrs({ className: 'Explorer__DrawingTile__Date'})`
  bottom: 8px;
  cursor: pointer;
  font-size: 12px;
  opacity: 0.1;
  position: absolute;
  right: 12px;
`

const Title = styled.h3.attrs({ className: 'Explorer__DrawingTile__Title'})`
  font-size: 18px;
  font-weight: bold;
  margin: 0 0 12px;
`

const Image = styled.img.attrs({ className: 'Explorer__DrawingTile__Image'})`
  display: block;
  width: 100%;
`
