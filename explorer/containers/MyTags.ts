import React from 'react'
import { createContainer } from 'unstated-next'
import { duplicateTagDrawingSets, loadMyTagDrawingSets } from '../lib/hashtags'
import { Drawing, TagDrawingSets } from '../types'

export function useMyTags() {
  const [myTagDrawingSets, setMyTagDrawingSets] = React.useState<TagDrawingSets>({})

  // Init client-side from localStorage
  React.useEffect(() => setMyTagDrawingSets(loadMyTagDrawingSets()), [])

  function saveMyTagDrawingSets(tagDrawingSets: TagDrawingSets): void {
    localStorage.setItem('tagDrawingSets', JSON.stringify(tagDrawingSets))
    setMyTagDrawingSets(tagDrawingSets)
  }

  function drawingHasMyTag(drawing: Drawing, tag: string): boolean {
    const drawings: Drawing[] = myTagDrawingSets[tag] ?? []
    return drawings.some(o => o.id === drawing.id)
  }

  const myTags: string[] = Object.keys(myTagDrawingSets).sort()

  function addMyTagToDrawing(tag: string, drawing: Drawing): void {
    const workingCopy: TagDrawingSets = duplicateTagDrawingSets(myTagDrawingSets)
    const drawings: Drawing[] = workingCopy[tag] ?? []
    if (!drawings.some(o => o.id === drawing.id)) {
      drawings.push(drawing)
      workingCopy[tag] = drawings
      saveMyTagDrawingSets(workingCopy)
      setMyTagDrawingSets(workingCopy)
    }
  }

  function removeMyTagFromDrawing(tag: string, drawing: Drawing): void {
    const workingCopy: TagDrawingSets = duplicateTagDrawingSets(myTagDrawingSets)
    const drawings: Drawing[] | undefined = workingCopy[tag]
    if (!drawings) return
    workingCopy[tag] = drawings.filter(o => o.id !== drawing.id)
    if (!workingCopy[tag].length) delete workingCopy[tag]
    saveMyTagDrawingSets(workingCopy)
    setMyTagDrawingSets(workingCopy)
  }

  function getMyTagsForDrawing(drawing: Drawing): string[] {
    return myTags.filter(tag => drawingHasMyTag(drawing, tag))
  }

  return {
    myTagDrawingSets,
    saveMyTagDrawingSets,
    myTags,
    drawingHasMyTag,
    addMyTagToDrawing,
    removeMyTagFromDrawing,
    getMyTagsForDrawing,
  }
}

export const MyTagsContainer = createContainer(useMyTags)
