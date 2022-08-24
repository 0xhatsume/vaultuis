import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body {
    width: 100%;
    margin: 0;
    font-family: 'Noto Sans', sans-serif;
    background: ${({ theme }) => theme.document.background};
  }

  html {
    overflow-x: hidden;
    overflow-y: scroll;
    font-size: 62.5%;
    -webkit-font-smoothing: antialiased;
  }

  body {
    position: relative;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.base2};
  }

  *::selection {
    color: ${({ theme }) => theme.base2};
    background: ${({ theme }) => theme.primary};
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
    font-family: 'DM Serif Display', serif;
    font-weight: normal;
  }

  a {
    display: inline-block;
    text-decoration: none;
    transition: color .2s ease-out, transform .2s ease-out;

    &:active {
      transition-duration: .05s;
      transform: translateY(1px);
    }
  }
`;
