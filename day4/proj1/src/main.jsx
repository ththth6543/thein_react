import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import MyRedux from "./MyRedux";
import { store } from "./store";
import TodoApp from "./TodoApp";

// import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <MyRedux />
    <TodoApp />
  </Provider>,
);
