import styled, { css } from 'styled-components'

export const Container = styled.main.attrs({ className: 'Explorer__DrawingPage__Container'})`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

export const Title = styled.h1.attrs({ className: 'Explorer__DrawingPage__Title'})`
  flex: 0 0 auto;
  font-size: 32px;
  font-weight: bold;
  padding: 16px 24px;
  text-align: center;
`

export const ImageWrap = styled.figure.attrs({ className: 'Explorer__DrawingPage__ImageWrap'})`
  flex: 1 1 0;
  position: relative;
`

export const Image = styled.img.attrs({ className: 'Explorer__DrawingPage__Image'})`
  display: block;
  height: 100%;
  object-fit: contain;
  position: absolute;
  width: 100%;
`

export const NavBar = styled.nav.attrs({ className: 'Explorer__DrawingPage__Header'})`
  display: flex;
  flex: 0 0 auto;
  justify-content: space-between;
  font-size: 18px;
  font-weight: bold;
  height: 80px;
`

export const navBarItemStyles = css`
  align-items: center;
  cursor: pointer;
  display: flex;
  padding: 0 2%;
  position: relative;
  user-select: none;

  &:hover::after,
  &:focus::after {
    background: black;
    bottom: 0;
    content: '';
    display: block;
    height: 4px;
    left: 0;
    position: absolute;
    width: 100%;
  }
`

export const ArrowButton = styled.button.attrs({ className: 'Explorer__DrawingPage__ArrowButton'})`
  ${navBarItemStyles}
  background: none;
  border: 0;
  font: inherit;
  font-size: 24px;
  padding: 0 6%;
`

export const Arrow = styled.div`
  border: solid currentColor;
  border-width: 4px 4px 0 0;
  height: 11px;
  width: 11px;
`

export const LeftArrow = styled(Arrow).attrs({ className: 'Explorer__DrawingPage__LeftArrow'})`
  transform: rotate(225deg);
`

export const RightArrow = styled(Arrow).attrs({ className: 'Explorer__DrawingPage__RightArrow'})`
  transform: rotate(45deg);
`

export const YearLink = styled.a.attrs({ className: 'Explorer__DrawingPage__YearLink'})`
  ${navBarItemStyles}
  color: black;
`

export const DrawingLink = styled.a.attrs({ className: 'Explorer__DrawingPage__DrawingLink'})`
  ${navBarItemStyles}
`

export const DateLink = styled.a.attrs({ classNamne: 'Explorer__DrawingPage__Date'})`
  ${navBarItemStyles}
`
