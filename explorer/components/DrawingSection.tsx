import React from 'react'
import styled from 'styled-components'
import { Drawing } from '../types'
import { DrawingTile } from './DrawingTile'

export const DrawingSection: React.FC<{ drawings: Drawing[] }> = ({ drawings, ...rest }) => {
  return (
    <Container {...rest}>
      {drawings && drawings.map(drawing => (
        <DrawingTile key={`${drawing.date} ${drawing.slug}`} {...drawing} />
      ))}
    </Container>
  )
}

const Container = styled.section.attrs({ className: 'Explorer__DrawingSection__Container'})`
  text-align: center;
`
