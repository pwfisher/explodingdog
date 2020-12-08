import React from 'react'
import { drawingYears } from '../__fixtures__/drawings'
import styled from 'styled-components'
import Link from 'next/link'

export const YearBar: React.FC<{ activeYear: number }> = ({ activeYear }) => {
  return (
    <YearList>
      {drawingYears.sort().reverse().map(year => (
        <YearItem key={year} isActive={year === activeYear}>
          {year === activeYear ? (
            <b>{year}</b>
          ) : (
            <Link href="/year/[id]" as={`/year/${year}`}>
              <a>{year}</a>
            </Link>
          )}
        </YearItem>
      ))}
    </YearList>
  )
}

const YearList = styled.ol.attrs({ className: 'Explorer__YearBar__YearList' })`
  background: white;
  padding: 0 16px;
  position: sticky;
  top: 0;
  z-index: 100;
`

const YearItem = styled.li.attrs({ className: 'Explorer__YearBar__YearItem' })<{ isActive: boolean}>`
  display: inline-block;
  font-size: 12px;
  margin: 8px 10px;
  position: relative;

  ${o => o.isActive && `
    &::after {
      background: currentColor;
      bottom: -2px;
      display: block;
      content: '';
      height: 2px;
      left: 0;
      opacity: 0.8;
      position: absolute;
      right: 0;
    }
  `}
`
