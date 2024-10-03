import React from "react";
import ReactDom from "react-dom/client";

import App from "./App";

// Username: thenameispriyam
// Password: Priyam2217pwd

// ReactDom.render(<App />, document.getElementById("root"));

const pass = "priyam@4005";
// API key : sinx21er89x

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
