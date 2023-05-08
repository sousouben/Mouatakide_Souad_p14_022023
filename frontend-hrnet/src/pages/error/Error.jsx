import React from "react";
import "./error.css";
import { Link } from "react-router-dom";

/**
 * Composant Error qui affiche une page d'erreur 404 avec un message et un lien de retour à la page d'accueil.
 * @returns {JSX.Element} Composant Error
 */
const Error = () => {
  return (
    <div className="error">
      <div className="error__title">404</div>
      <p className="error__content">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link className="error__link" to="/">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
};

export default Error;
