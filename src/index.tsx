import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import keycloak from './keycloak';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

keycloak
  .init({
    onLoad: 'login-required',
    checkLoginIframe: false,
    responseMode: 'query', 
    redirectUri: window.location.origin + '/dashboard', 
  })
  .then((authenticated) => {
    if (authenticated) {
      
      console.log(" Authenticated");
      console.log("✅ Logged in");
      console.log("🪪 Access Token:", keycloak.token);
      console.log("🧾 ID Token:", keycloak.idToken);
      console.log("🧍‍♂️ User Info:", keycloak.tokenParsed);
      root.render(
        <React.StrictMode>
          <BrowserRouter>
            <App />
            <ToastContainer />
          </BrowserRouter>
        </React.StrictMode>
      );
    } else {
      console.warn(" Not authenticated");
      keycloak.login();
    }
  })
  .catch((error) => {
    console.error(" Keycloak init failed", error);
  });
