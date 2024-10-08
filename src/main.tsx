import { createRoot } from "react-dom/client";
import { store } from "./store/store.ts";
import { Provider } from "react-redux";
import {BrowserRouter} from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
