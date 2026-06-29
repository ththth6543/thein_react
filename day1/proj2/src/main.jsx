import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./semantic/Header.jsx";
import Footer from "./semantic/Footer.jsx";
import Garage from "./semantic/Garage.jsx";
import BasicExp from "./semantic/BasicExp.jsx";
// import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <Garage />
    <BasicExp />
    <Footer />
    {/* <App /> */}
  </StrictMode>,
);
