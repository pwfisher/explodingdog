import React from 'react'
import styled from 'styled-components'
import { Drawing } from '../../types'
import Modal from 'react-modal'

export const AddTagModal: React.FC<{ drawing: Drawing; isOpen: boolean; closeModal: () => void }> = ({
  drawing,
  isOpen,
  closeModal,
}) => {
  const onNewTagSubmit: (e: React.FormEvent) => void = (e) => {
    e.preventDefault()
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
    >
      <CloseButton onClick={closeModal}>close</CloseButton>
      <Title>Add Hashtags</Title>
      <pre>{JSON.stringify(drawing, null, 2)}</pre>
      <form onSubmit={onNewTagSubmit}>
        New: <input /> <input type='submit' />
      </form>
    </Modal>
  )
}

const CloseButton = styled.button.attrs({ classNames: 'Explorer__AddTagModal__CloseButton' })`
  font-size: 24px;
  position: absolute;
  right: 24px;
  top: 24px;
`

const Title = styled.h1.attrs({ classNames: 'Explorer__AddTagModal__CloseButton' })`
  text-align: center;
`
