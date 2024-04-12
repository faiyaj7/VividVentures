import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store } from "./store/store";
import { persistStore } from "redux-persist";

import Auth0ProviderWithHistory from "./auth/AuthProvider";
import Loader from "./components/Loader.jsx";
let persistor = persistStore(store);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <React.Suspense fallback={<Loader />}>
          <PersistGate loading={null} persistor={persistor}>
            <Auth0ProviderWithHistory>
              <App />
            </Auth0ProviderWithHistory>
          </PersistGate>
        </React.Suspense>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
