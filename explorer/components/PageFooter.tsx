import React from 'react'
import styled from 'styled-components'

type ListItem = {
  href: string
  text: string
}

const list: ListItem[] = [
  { href: 'https://www.instagram.com/explodingdog_sam/', text: 'instagram' },
  { href: 'http://twitter.com/Explodingdog', text: 'twitter' },
  { href: 'https://explodingdog.tumblr.com/', text: 'tumblr' },
  { href: 'http://www.buildingaworld.com', text: 'gift shop' },
  { href: 'http://explodingdog.com/mailinglist/', text: 'mailing list' },
]

export const PageFooter: React.FC = () => {
  return (
    <Container>
      <Heading>also at:</Heading>
      <List>
        {list.map(({ href, text}) => <ListItem><a {...{ href }}>{text}</a></ListItem>)}
      </List>
      <Copyright>©2021 Sam Brown</Copyright>
    </Container>
  )
}

const Container = styled.footer.attrs({ className: 'Explorer__PageFooter__Container'})`
  margin-top: 64px;
  padding: 40px 24px;
`

const Heading = styled.ul.attrs({ className: 'Explorer__PageFooter__Heading'})`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
`

const List = styled.ul.attrs({ className: 'Explorer__PageFooter__List'})`
  margin-left: 24px;
`

const ListItem = styled.li.attrs({ className: 'Explorer__PageFooter__ListItem'})`
  display: inline-block;
  font-size: 32px;
  font-weight: bold;
  margin: 8px 20px;
  position: relative;

  &:not(:last-of-type) {
    padding-right: 20px;

    ::after {
      content: '·';
      display: inline;
      opacity: 0.05;
      position: absolute;
      right: -14px;
      top: 0;
    }
  }
`

const Copyright = styled.div.attrs({ className: 'Explorer__PageFooter__Copyright'})`
  color: lightGrey;
  font-size: 14px;
  margin: 64px 0 32px;
  text-align: center;
`
