import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-size: 16px;
  }

  html, body {
    font-family: inter, sans-serif;
    background-color: #FFFBEF;
  }

  ul, ol, li {
    list-style: none;
  }
`;
