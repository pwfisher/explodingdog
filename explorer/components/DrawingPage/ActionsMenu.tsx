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

  const ref = React.useRef<HTMLDivElement>(null)
  const onDocumentClick = (e: MouseEvent) => {
    if (e.target instanceof HTMLElement && !ref.current?.contains(e.target)) setIsActive(false)
  }
  React.useEffect(() => {
    if (isActive) document.addEventListener('mousedown', onDocumentClick)
    else document.removeEventListener('mousedown', onDocumentClick)
    return () => document.removeEventListener('mousedown', onDocumentClick)
  }, [isActive])

  return (
    <>
      <Container title='Actions' onClick={() => setIsActive(!isActive)}>
        <svg viewBox="0 0 24 24">
          <circle cx="5" cy="12" r="2" />
          <circle cx="12" cy="12" r="2" />
          <circle cx="19" cy="12" r="2" />
        </svg>
        <Popup {...{ isActive, ref }}>
          <Link href='/'><Item>Home</Item></Link>
          {actions.map(({ onClick, title }) => <Item key={title} {...{ onClick }}>{title}</Item>)}
          <Copyright>©2021 Sam Brown</Copyright>
        </Popup>
      </Container>
      {isEditTagsModalOpen && (
        <EditTagsModal {...{ drawing }} isOpen={isEditTagsModalOpen} closeModal={toggleEditTagsModal} />
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

const Copyright = styled.div.attrs({ className: 'Explorer__ActionsMenu__Copyright' })`
  color: #999;
  font-size: 14px;
  padding: 12px 8px 4px;
  text-align: center;
`
