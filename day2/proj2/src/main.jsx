import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Timer from "./Timer";
import MyUseEffect from "./MyUseEffect";
import MyUseContext1 from "./MyUseContext1";
import MyUseContext2 from "./MyUseContext2";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Timer /> */}
    {/* <MyUseEffect /> */}
    {/* <MyUseContext1 /> */}
    <MyUseContext2 />
  </StrictMode>,
);
