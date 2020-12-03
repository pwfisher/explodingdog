import React from 'react'
import { Drawing } from '../types/drawing-models'

export const DrawingTile: React.FC<Drawing> = ({ date, title, image }) => {
  return (
    <div className="drawing">
      <small>{date}</small>
      <b>{title}</b>
      <img src={`/images/${image}`} alt={title}/>
    </div>
  )
}
