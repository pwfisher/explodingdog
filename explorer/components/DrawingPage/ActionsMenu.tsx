import React from 'react'
import styled from 'styled-components'
import { navBarItemStyles } from './styles'
import { useCookies } from 'react-cookie'
import { Drawing } from '../../types'
import { EditTagsModal } from './EditTagsModal'
import { ExportTagsModal } from './ExportTagsModal'
import Link from 'next/link'

type Action = {
  title: string
  onClick: () => void
}

export const ActionsMenu: React.FC<{ drawing: Drawing }> = ({ drawing }) => {
  const [isActive, setIsActive] = React.useState(false)
  const [cookies] = useCookies(['feature__myTags'])
  const [actions, setActions] = React.useState<Action[]>([])
  const [isEditTagsModalOpen, setIsEditTagsModalOpen] = React.useState(false)
  const [isExportTagsModalOpen, setIsExportTagsModalOpen] = React.useState(false)

  const toggleEditTagsModal = () => setIsEditTagsModalOpen(!isEditTagsModalOpen)
  const toggleExportTagsModal = () => setIsExportTagsModalOpen(!isExportTagsModalOpen)

  React.useEffect(() => {
    const newActions = []
    if (cookies.feature__myTags === 'on') {
      newActions.push({ title: 'Export tags', onClick: toggleExportTagsModal })
      newActions.push({ title: 'Edit tags', onClick: toggleEditTagsModal })
    }
    setActions(newActions)
  }, [cookies])

  return (
    <>
      <Container title='Actions' onClick={() => setIsActive(!isActive)}>
        <svg viewBox="0 0 24 24">
          <circle cx="5" cy="12" r="2" />
          <circle cx="12" cy="12" r="2" />
          <circle cx="19" cy="12" r="2" />
        </svg>
        <Popup isActive={isActive}>
          <Link href='/'><Item>Home</Item></Link>
          {actions.map(action => (
            <Item key={action.title} onClick={action.onClick}>{action.title}</Item>
          ))}
        </Popup>
      </Container>
      {isEditTagsModalOpen && (
        <EditTagsModal drawing={drawing} isOpen={isEditTagsModalOpen} closeModal={toggleEditTagsModal} />
      )}
      {isExportTagsModalOpen && (
        <ExportTagsModal isOpen={isExportTagsModalOpen} closeModal={toggleExportTagsModal} />
      )}
    </>
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

const Item = styled.a.attrs({ className: 'Explorer__ActionsMenu__Item'})`
  display: block;
  font-size: 24px;
  padding: 8px;

  &:hover {
    background: #e5e5e5;
  }
`
