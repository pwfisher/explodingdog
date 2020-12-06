import React from 'react'
import { Drawing } from '../types/drawing-models'
import styled from 'styled-components'

export const DrawingTile: React.FC<Drawing> = ({ date, title, slug, image }) => {
  return (
    <Container>
      <Date>{date}</Date>
      <Title>{title}</Title>
      <a href={`http://explodingdog.com/title/${slug}.html`} target='_blank'>
        <Image src={`/images/${image}`} alt={title} />
      </a>
    </Container>
  )
}

const Container = styled.div.attrs({ className: 'Explorer__DrawingTile__Container'})`
  display: inline-block;
  padding: 24px 12px;
  width: 250px;
`

const Date = styled.div.attrs({ className: 'Explorer__DrawingTile__Date'})`
  font-size: 12px;
  margin-bottom: -4px;
  opacity: 0.1;
  text-align: right;
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
