import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    font-family: ${({theme}) => theme.fonts.primary};
    background-color: ${({theme}) => theme.colors.bgBlack};
    color: ${({theme}) => theme.colors.textColor};
  }
`;
