// Core Libraries / Components / Hooks
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// Components
import App from "./pages/Home";
// Miscellanious
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
