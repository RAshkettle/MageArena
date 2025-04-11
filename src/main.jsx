/**
 * @module main
 * @description Entry point for the MageArena application
 */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

/**
 * Renders the root application component into the DOM
 * The React StrictMode wrapper enables additional development checks
 */
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
