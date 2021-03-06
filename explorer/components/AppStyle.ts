import { createGlobalStyle } from 'styled-components'

export const AppStyle = createGlobalStyle`
  body, ul, ol, figure, h1 {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  html {
    font-family: 'Helvetica Neue', sans-serif;
  }

  a {
    color: currentColor;
    position: relative;
    text-decoration: none;

    &:visited {
      color: #AAA;
    }
  }
`
