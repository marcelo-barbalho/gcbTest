import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  
    margin:0;
    padding: 0;
    outline: 0;
    -webkit-font-smoothing: antialiased;
}
body{
font-family: muli, sans-serif;
font-weight: 400;
font-style: normal;
}

`;

export default GlobalStyle;
