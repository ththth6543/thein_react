import { createRoot } from "react-dom/client";
import "./index.css";
// import App from './App.jsx'
import MyApp from "./MyApp";
import MyApp2 from "./MyApp2";
import MyApp3 from "./MyApp3";
import Header from "./Header";
import Footer from "./Footer";
import MyReducer from "./MyReducer";
import MyWithoutCallBack from "./MyWithoutCallBack";
import MyWithCallback from "./MyWithCallback";
import MyWithoutMemo from "./MyWithoutMemo";
import MyWithMemo from "./MyWithMemo";
import MyUseFetch from "./MyUseFetch";
import MyUseFetch1 from "./MyUseFetch1";

createRoot(document.getElementById("root")).render(
  <div>
    <Header />
    <MyApp />
    <MyApp2 />
    <MyApp3 />
    <hr />
    <MyReducer />
    <hr />
    {/* <MyWithoutCallBack /> */}
    <hr />
    {/* <MyWithCallback /> */}
    <hr />
    {/* <MyWithoutMemo /> */}
    <hr />
    {/* <MyWithMemo /> */}
    <hr />
    <MyUseFetch />
    <hr />
    <MyUseFetch1 />
    <Footer />
  </div>,
);
