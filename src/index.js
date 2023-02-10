import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { Provider } from "react-redux";
import { store } from "./configure-store";
import { Container } from "./store/container";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Container />
    </Provider>
  </React.StrictMode>
);
