import React from "react";
import ReactDOM from "react-dom";
import { IndexRoutes } from "./app/router/index.routes";
import { ReRenderContextProvider } from "./app/context/reRender.context";

ReactDOM.render(
  <React.StrictMode>
    <ReRenderContextProvider>
      <IndexRoutes />
    </ReRenderContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
