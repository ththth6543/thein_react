import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./semantic/Header.jsx";
import Footer from "./semantic/Footer.jsx";
import Garage from "./semantic/Garage.jsx";
import BasicExp from "./semantic/BasicExp.jsx";
import Chapter08 from "./semantic/Chapter08.jsx";
// import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <Garage />
    <Chapter08 />
    <BasicExp />
    <Footer />
    {/* <App /> */}
  </StrictMode>,
);
