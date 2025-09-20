import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "@/styles/index.scss";
import App from "./app/App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
