import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ReleaseProvider } from "./context/ReleaseContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ReleaseProvider>
        <App />
      </ReleaseProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
