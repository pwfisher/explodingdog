import React from 'react'

export const PageFooter: React.FC = () => {
  return (
    <footer>
      <h2>also at:</h2>
      <ul>
        <li><a href="http://www.buildingaworld.com">gift shop</a></li>
        <li><a href="http://explodingdog.com/mailinglist/">emailing list</a></li>
      </ul>
      <ul>
        <li><a href="https://www.instagram.com/explodingdog_sam/">instagram</a></li>
        <li><a href="http://twitter.com/Explodingdog">twitter</a></li>
      </ul>
      <small>
        ©2020 Sam Brown
      </small>
    </footer>
  )
}
