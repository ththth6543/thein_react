import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import RouterApp from "./RouterApp.jsx";
import AppUseParam from "./AppUseParam.jsx";

createRoot(document.getElementById("root")).render(
  // <RouterApp />,
  <AppUseParam />,
);
