import React from "react";
import ReactDOM from "react-dom";
import Routers from "./routes";
import GlobalStyle from "./assets/style/globalStyle";
// import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Routers />
  </React.StrictMode>,
  document.getElementById("root")
);
