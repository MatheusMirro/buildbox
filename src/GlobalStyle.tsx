import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    background: #343434;
  }

  .globalContainer { 
     max-width: 768px;
     margin: auto;
  }

  p {
    margin: 0;
  }
`;
