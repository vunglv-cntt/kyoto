import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
  }

  html {
    font-size: 16px;
  }

  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color: ${({ theme }: any) => theme.colors.body.text};
  }
  .cursor-pointer {
    cursor: pointer;
  }
`;
