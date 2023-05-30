import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BillContextProvider } from "./context/BillContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BillContextProvider>
      <App />
    </BillContextProvider>
  </React.StrictMode>
);
