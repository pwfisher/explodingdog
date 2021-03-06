import React from 'react'
import styled from 'styled-components'
import { Drawing } from '../../types'
import Modal from 'react-modal'
import { MyTagsContainer } from '../../containers/MyTags'

export const EditTagsModal: React.FC<{
  drawing: Drawing
  isOpen: boolean
  closeModal: () => void
}> = ({ drawing, isOpen, closeModal }) => {
  const {
    myTags,
    drawingHasMyTag,
    addMyTagToDrawing,
    removeMyTagFromDrawing,
  } = MyTagsContainer.useContainer()

  const [newTag, setNewTag] = React.useState('')

  function onNewTagSubmit(e: React.FormEvent<HTMLFormElement>) {
    addMyTagToDrawing(newTag, drawing)
    setNewTag('')
    e.preventDefault()
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
    >
      <div onKeyDown={e => e.stopPropagation()}>
        <CloseButton onClick={closeModal}>close</CloseButton>
        <Title>Add Tags</Title>
        <Code>{JSON.stringify(drawing, null, 2)}</Code>
        <form onSubmit={onNewTagSubmit}>
          New:{' '}
          <input value={newTag} onChange={e => setNewTag(e.currentTarget.value)} />
          <input type='submit' />
        </form>
        <br />
        {Object.entries(
          myTags.reduce<Record<string, string[]>>((accumulator, tag) => {
            const key = tag[0]
            if (!accumulator[key]) accumulator[key] = []
            accumulator[key].push(tag)
            return accumulator
          }, {})
        ).map(([key, tags]) => (
          <TagLetter {...{ key }}>
            <h4>{key}</h4>
            <TagList {...{ key }}>
              {tags.map(tag => (
                <Tag key={tag}>
                  <label>
                    <input
                      type='checkbox'
                      checked={drawingHasMyTag(drawing, tag)}
                      onChange={e => {
                        e.currentTarget.checked
                          ? addMyTagToDrawing(tag, drawing)
                          : removeMyTagFromDrawing(tag, drawing)
                      }}
                    /> {tag}
                  </label>
                </Tag>
              ))}
            </TagList>
          </TagLetter>
        ))}
      </div>
    </Modal>
  )
}

const CloseButton = styled.button.attrs({ classNames: 'Explorer__EditTagsModal__CloseButton' })`
  font-size: 24px;
  position: fixed;
  right: 60px;
  top: 60px;
`

const Title = styled.h1.attrs({ classNames: 'Explorer__EditTagsModal__Title' })`
  text-align: center;
`

const Code = styled.code.attrs({ classNames: 'Explorer__EditTagsModal__Code' })`
  color: #999;
  display: block;
  font-size: 9px;
  line-height: 12px;
  margin: 8px 0 16px;
`

const TagLetter = styled.ul.attrs({ classNames: 'Explorer__EditTagsModal__TagLetter' })`
  display: flex;
  margin: 8px 0;

  > h4:first-child {
    flex-shrink: 0;
    font-size: 20px;
    margin: 0;
    width: 24px;
  }
`

const TagList = styled.ul.attrs({ classNames: 'Explorer__EditTagsModal__TagList' })``

const Tag = styled.li.attrs({ classNames: 'Explorer__EditTagsModal__Tag' })`
  display: inline-block;
  user-select: none;

  &::after {
    content: '·';
    display: inline-block;
    opacity: 0.3;
  }

  &:last-child::after {
    display: none;
  }

  label {
    cursor: pointer;
    display: inline-block;
    padding: 4px 6px 4px 2px;

    &:hover {
      box-shadow: inset 0 0 8px rgba(15, 100, 242, 0.15);

      input[type="checkbox"]{
        box-shadow: inset 0 0 4px rgba(15, 100, 242, 0.5);
      }
    }
  }
`
