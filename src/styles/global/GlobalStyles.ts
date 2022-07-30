import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-size: 16px;
  }

  html, body {
    font-family: 'Roboto', sans-serif;
    background-color: #e5e5e5;
  }
`;
