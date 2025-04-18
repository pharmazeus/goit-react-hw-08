import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App/App.jsx";
import { store } from "./redux/store.js";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <StrictMode>
        <App />
      </StrictMode>
    </Provider>
  </BrowserRouter>
);
