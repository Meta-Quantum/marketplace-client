import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./storeState";
import "./index.scss";
import App from "./App";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Toaster />
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </Provider>
  </React.StrictMode>
);
