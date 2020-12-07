import React from 'react'
import styled from 'styled-components'

export const PageFooter: React.FC = () => {
  return (
    <Container>
      <AlsoAt>also at:</AlsoAt>
      <List>
        <ListItem>
          <a href="http://www.buildingaworld.com">gift shop</a>
        </ListItem>
        <ListItem>
          <a href="http://explodingdog.com/mailinglist/">emailing list</a>
        </ListItem>
      </List>
      <List>
        <ListItem>
          <a href="https://www.instagram.com/explodingdog_sam/">instagram</a>
        </ListItem>
        <ListItem>
          <a href="http://twitter.com/Explodingdog">twitter</a>
        </ListItem>
      </List>
      <Copyright>©2020 Sam Brown</Copyright>
    </Container>
  )
}

const Container = styled.footer.attrs({ className: 'Explorer__PageFooter__Container'})`
  background: #f8f8f8;
  border-top: 1px solid #e5e5e5;
  margin-top: 24px;
  padding: 24px;
`

const AlsoAt = styled.ul.attrs({ className: 'Explorer__PageFooter__AlsoAt'})`
  font-size: 24px;
  font-weight: bold;
`

const List = styled.ul.attrs({ className: 'Explorer__PageFooter__List'})`
  margin-left: 24px;
`

const ListItem = styled.li.attrs({ className: 'Explorer__PageFooter__ListItem'})`
  display: inline-block;
  font-size: 32px;
  font-weight: bold;
  margin: 8px 12px;
`

const Copyright = styled.div.attrs({ className: 'Explorer__PageFooter__Copyright'})`
  color: lightGrey;
  font-size: 14px;
  margin: 16px 24px 0;
`
