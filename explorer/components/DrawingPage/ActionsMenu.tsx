import React from 'react'
import styled from 'styled-components'
import { navBarItemStyles } from './styles'

type Action = {
  title: string
  onClick: () => void
}

export const ActionsMenu: React.FC = () => {
  const [isActive, setIsActive] = React.useState(false)

  const actions: Action[] = []

  if (!actions.length) return null

  return (
    <Container title='More Actions' onClick={() => setIsActive(!isActive)}>
      <svg viewBox="0 0 24 24">
        <circle cx="5" cy="12" r="2" />
        <circle cx="12" cy="12" r="2" />
        <circle cx="19" cy="12" r="2" />
      </svg>
      <Popup isActive={isActive}>
        {actions.map(action => (
          <Item><a onClick={action.onClick}>{action.title}</a></Item>
        ))}
      </Popup>
    </Container>
  )
}

const Container = styled.button.attrs({ className: 'Explorer__ActionsMenu__Container'})`
  ${navBarItemStyles}
  background: none;
  border: 0;

  svg {
    display: block;
    width: 24px;
  }
`

const Popup = styled.div.attrs({ className: 'Explorer__ActionsMenu__Popup'})<{ isActive: boolean }>`
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.2);
  bottom: 100%;
  display: ${o => !o.isActive && 'none'};
  padding: 8px;
  position: absolute;
  right: 0;
  text-align: left;
  width: 200px;
`

const Item = styled.div.attrs({ className: 'Explorer__ActionsMenu__Item'})``
