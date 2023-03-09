import React from "react";
import ReactDom from "react-dom/client";

import App from "./App";

// ReactDom.render(<App />, document.getElementById("root"));

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
