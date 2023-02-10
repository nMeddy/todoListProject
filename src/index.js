import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import styled from "styled-components";

const IndexCustome = styled.div`
  font-family: Abel;
  font-weight: lighter;
  font-size: 16px;
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <IndexCustome>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </IndexCustome>
);
