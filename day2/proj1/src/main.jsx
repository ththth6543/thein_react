import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import MyApp from "./semantic/MyApp";
// import App from "./App.jsx";
import Game from "./tic_tac_toe/Game";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <MyApp /> */}
    {/* <App /> */}
    <Game />
  </StrictMode>,
);
