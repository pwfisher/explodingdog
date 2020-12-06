import { createGlobalStyle } from 'styled-components'

export const AppStyle = createGlobalStyle`
  body, ul, ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  html {
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 19px;
    line-height: 1.5;
  }

  a {
    color: currentColor;
    position: relative;
    text-decoration: none;

    &:visited {
      color: lightgrey;
    }

    &::after {
      background: currentColor;
      bottom: -2px;
      display: block;
      content: '';
      height: 1px;
      left: 0;
      opacity: 0.2;
      position: absolute;
      right: 0;

    }

    &:hover {
      background: rgba(128,128,128,0.1);
    }
  }
`
