import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html,
body {
    font-family: 'Poppins', sans-serif;
    background-color: #f7f9fd;
}
a {
  color: inherit;
  text-decoration: none;
}
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  border: 0;
  outline: none;
  text-transform: capitalize;
  user-select: none;
}
`;
