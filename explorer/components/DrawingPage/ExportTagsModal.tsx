import React from 'react'
import styled, { css } from 'styled-components'
import Modal from 'react-modal'
import { MyTagsContainer } from '../../containers/MyTags'
import { TagDrawingSets } from '../../types'
import stringify from 'json-stable-stringify'

export const ExportTagsModal: React.FC<{ isOpen: boolean; closeModal: () => void }> = ({
  isOpen,
  closeModal,
}) => {
  const { myTagDrawingSets, saveMyTagDrawingSets } = MyTagsContainer.useContainer()
  const storedValue: string = stringify(myTagDrawingSets, { space: 2 })
  const [showCopySuccess, setShowCopySuccess] = React.useState(false)

  function copyToClipboard() {
    navigator.clipboard.writeText(storedValue)
    setShowCopySuccess(true)
    setTimeout(() => setShowCopySuccess(false), 2000)
  }

  // Valid edits in textarea are written to localStorage
  function onChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    try {
      saveMyTagDrawingSets(JSON.parse(e.currentTarget.value) as TagDrawingSets)
    } catch (e) {}
  }

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal}>
      <Wrap onKeyDown={e => e.stopPropagation()}>
        <Title>Export Hashtags</Title>
        <ButtonBar>
          <CopyButton onClick={copyToClipboard} showSuccess={showCopySuccess}>Copy</CopyButton>
          <CloseButton onClick={closeModal}>close</CloseButton>
        </ButtonBar>
        <ExportTextarea value={storedValue} onChange={onChange} />
      </Wrap>
    </Modal>
  )
}

const Wrap = styled.div.attrs({ classNames: 'Explorer__ExportTagsModal__Wrap' })`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Title = styled.h1.attrs({ classNames: 'Explorer__ExportTagsModal__Title' })`
  text-align: center;
`

const ButtonBar = styled.div.attrs({ classNames: 'Explorer__ExportTagsModal__ButtonBar' })`
  display: flex;
  justify-content: space-between;
`

const CopyButton = styled.button.attrs({ classNames: 'Explorer__ExportTagsModal__CopyButton' })<{
  showSuccess: boolean
}>`
  align-self: flex-start;
  font-size: 24px;

  ${o => o.showSuccess && css`
    position: relative;

    &::after {
      background: rgb(200, 255, 230);
      border: 1px solid rgba(8, 128, 44, 1);
      border-radius: 5px;
      box-shadow: inset 0 0 5px rgba(15, 225, 80, 1);
      color: rgba(0, 64, 0, 1);
      content: "copied to clipboard ✓";
      display: block;
      left: calc(100% + 16px);
      padding: 1px 0 2px;
      position: absolute;
      top: -2px;
      width: 250px;
      z-index: 1;
    }
  `}
`

const CloseButton = styled.button.attrs({ classNames: 'Explorer__ExportTagsModal__CloseButton' })`
  font-size: 24px;
`

const ExportTextarea = styled.textarea.attrs({ classNames: 'Explorer__ExportTagsModal__ExportTextarea' })`
  height: 100%;
  margin: 16px -20px -20px;
  padding: 16px;
`
