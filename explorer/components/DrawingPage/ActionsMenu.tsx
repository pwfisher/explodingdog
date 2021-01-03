import React from 'react'
import styled from 'styled-components'
import { navBarItemStyles } from './styles'
import { useCookies } from 'react-cookie'

type Action = {
  title: string
  onClick: () => void
}

export const ActionsMenu: React.FC = () => {
  const [isActive, setIsActive] = React.useState(false)
  const [cookies] = useCookies(['feature__myTags'])
  const [actions, setActions] = React.useState<Action[]>([])

  const addNewTag = { title: 'Add new tag', onClick: () => alert('add new tag') }

  React.useEffect(() => {
    const newActions = []
    if (cookies.feature__myTags === 'on') newActions.push(addNewTag)
    setActions(newActions)
  }, [cookies])

  return (
    <Container title='Actions' onClick={() => setIsActive(!isActive)} isHidden={!actions.length}>
      <svg viewBox="0 0 24 24">
        <circle cx="5" cy="12" r="2" />
        <circle cx="12" cy="12" r="2" />
        <circle cx="19" cy="12" r="2" />
      </svg>
      <Popup isActive={isActive}>
        {actions.map(action => (
          <Item key={action.title}><a onClick={action.onClick}>{action.title}</a></Item>
        ))}
      </Popup>
    </Container>
  )
}

const Container = styled.button.attrs({ className: 'Explorer__ActionsMenu__Container'})<{ isHidden: boolean }>`
  ${navBarItemStyles}
  background: none;
  border: 0;
  display: ${o => o.isHidden && 'none'};

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
