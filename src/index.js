// OBSOLETO PERO SE AÑADEN DESDE EL CREATE REACT APP :v

import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

//ABAJO ESTA LA NUEVA VERSION --Gowther🐺
//NO FUNCIONA CON REACT-ROUTER-DOM v5.x.x

// import { createRoot } from "react-dom/client";
// import { StrictMode } from "react";

// // 👇️ IMPORTANT: use correct ID of your root element
// // this is the ID of the div in your index.html file
// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// // 👇️ if you use TypeScript, add non-null (!) assertion operator
// // const root = createRoot(rootElement!);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
