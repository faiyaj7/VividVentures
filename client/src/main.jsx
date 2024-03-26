import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Auth0ProviderWithHistory from "./auth/AuthProvider";
// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);
// const options = {
//   clientSecret: `${process.env.REACT_APP_STRIPE_SECRET_KEY}`,
// };
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Auth0ProviderWithHistory>
          {/* <Elements stripe={stripePromise} options={options}> */}
          <App />
          {/* </Elements> */}
        </Auth0ProviderWithHistory>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
