import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    --cor-destaque-principal:#BADC58;
    margin:0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
}
body{
font-family: muli, sans-serif;
font-weight: 400;
font-style: normal;
font-size:16px;
}
h1,h2,h3,h4{
   color: #2D3561;
    font-family: "Montserrat", sans-serif;
}
h3{
    font-size: 1.5rem;
    margin:1rem 0;
}
button{
    background-color:var(--cor-destaque-principal);
    padding:1rem 1.5rem;
    border-radius: 5px;
    color:#fff;
    border:none;
  font-size:1rem;

}
`;

export default GlobalStyle;
