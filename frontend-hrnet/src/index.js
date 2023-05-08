import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

/**
 * Point d'entrée de l'application React.
 * Rend le composant racine "App" dans le DOM.
 * Utilise un root React pour améliorer les performances de rendu.
 * Utilise le composant BrowserRouter pour gérer la navigation entre les pages.
 * Utilise le composant Provider pour fournir le store Redux à l'application.
 * @module index
 */

// Crée un root React pour améliorer les performances de rendu.
const root = ReactDOM.createRoot(document.getElementById("root"));
// Rend le composant racine App dans le DOM.
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
