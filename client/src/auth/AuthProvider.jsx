import React from "react";
import { useNavigate } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const Auth0ProviderWithHistory = ({ children }) => {
  const domain = import.meta.env.VITE_APP_AUTH_DOMAIN;
  const clientId = import.meta.env.VITE_APP_AUTH0_CLIENT_ID;

  const history = useNavigate();

  const onRedirectCallback = (appState) => {
    // console.log("the appstate is", appState);
    history(appState?.returnTo || window.location.pathname);
  };

  if (!(domain && clientId)) {
    return null;
  }
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
