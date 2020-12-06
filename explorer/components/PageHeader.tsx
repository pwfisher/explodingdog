import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

export const PageHeader: React.FC = () => {
  return (
    <Container>
      <Link href='/'>
        <a>explodingdog <Explorer>explorer</Explorer></a>
      </Link>
    </Container>
  )
}

const Container = styled.header.attrs({ className: 'Explorer__PageHeader__Container'})`
  background: #f8f8f8;
  border-bottom: 1px solid #e5e5e5;
  font-size: 48px;
  font-weight: bold;
  padding: 24px;

  a:visited {
    color: currentColor;
  }
`

const Explorer = styled.span.attrs({ className: 'Explorer__PageHeader__Explorer'})`
  opacity: 0.1;
`
