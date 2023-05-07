import React from "react";
import "./error.css";
import { Link } from "react-router-dom";

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
