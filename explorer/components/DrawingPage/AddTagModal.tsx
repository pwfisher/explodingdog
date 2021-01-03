import React from 'react'
import styled from 'styled-components'
import { Drawing, TagDrawingSets } from '../../types'
import Modal from 'react-modal'
import { addTagToDrawing, loadTagDrawingSets, drawingHasTag, removeTagFromDrawing } from '../../lib/hashtags'

export const AddTagModal: React.FC<{ drawing: Drawing; isOpen: boolean; closeModal: () => void }> = ({
  drawing,
  isOpen,
  closeModal,
}) => {
  const [newTag, setNewTag] = React.useState('')
  const [tagDrawingSets, setTagDrawingSets] = React.useState<TagDrawingSets>(loadTagDrawingSets())

  function onNewTagSubmit(e: React.FormEvent<HTMLFormElement>) {
    addTagToDrawing(newTag, drawing)
    setNewTag('')
    setTagDrawingSets(loadTagDrawingSets())
    e.preventDefault()
  }
  const tags = Object.keys(tagDrawingSets)

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
    >
      <div onKeyDown={e => e.stopPropagation()}>
        <CloseButton onClick={closeModal}>close</CloseButton>
        <Title>Add Hashtags</Title>
        <pre style={{ fontSize: '9px' }}>{JSON.stringify(drawing, null, 2)}</pre>
        <form onSubmit={onNewTagSubmit}>
          New: <input value={newTag} onChange={e => setNewTag(e.currentTarget.value)} /> <input type='submit' />
        </form>
        <br />
        <ul>
          {tags.sort().map(tag => (
            <Tag key={tag}>
              <label>
                <input
                  type='checkbox'
                  checked={drawingHasTag(drawing, tag)}
                  onChange={e => {
                    e.currentTarget.checked ? addTagToDrawing(tag, drawing) : removeTagFromDrawing(tag, drawing)
                    setTagDrawingSets(loadTagDrawingSets())
                  }}
                /> {tag}
              </label>
            </Tag>
          ))}
        </ul>
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

const Title = styled.h1.attrs({ classNames: 'Explorer__AddTagModal__Title' })`
  text-align: center;
`

const Tag = styled.li.attrs({ classNames: 'Explorer__AddTagModal__Tag' })`
  border-right: 1px solid #DDD;
  display: inline-block;
  margin: 8px 0;
  padding: 0 8px;
`
