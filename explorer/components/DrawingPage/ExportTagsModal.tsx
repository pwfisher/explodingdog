import React from 'react'
import styled from 'styled-components'
import Modal from 'react-modal'
import { loadTagDrawingSets } from '../../lib/hashtags'

export const ExportTagsModal: React.FC<{ isOpen: boolean; closeModal: () => void }> = ({
  isOpen,
  closeModal,
}) => {
  const tagDrawingSets = loadTagDrawingSets()
  const exportString = JSON.stringify(tagDrawingSets, null, 2)

  function selectAll() {
    navigator.clipboard.writeText(exportString)
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
    >
      <div onKeyDown={e => e.stopPropagation()}>
        <CloseButton onClick={closeModal}>close</CloseButton>
        <Title>Export Hashtags</Title>
        <SelectAllButton onClick={selectAll}>select all</SelectAllButton>
        <Code>{exportString}</Code>
      </div>
    </Modal>
  )
}

const CloseButton = styled.button.attrs({ classNames: 'Explorer__AddTagModal__CloseButton' })`
  font-size: 24px;
  position: absolute;
  right: 24px;
  top: 24px;
`

const SelectAllButton = styled.button.attrs({ classNames: 'Explorer__AddTagModal__SelectAllButton' })`
  font-size: 24px;
`

const Title = styled.h1.attrs({ classNames: 'Explorer__AddTagModal__Title' })`
  text-align: center;
`

const Code = styled.code.attrs({ classNames: 'Explorer__AddTagModal__Code' })`
  color: #999;
  display: block;
  margin: 24px 0 0;
  white-space: pre;
`
