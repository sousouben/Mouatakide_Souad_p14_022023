import "./error.css";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

/**
 * Composant Error qui affiche une page d'erreur 404 avec un message et un lien de retour à la page d'accueil.
 * @returns {JSX.Element} Composant Error
 */
const Error = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/error");
  }, [navigate]);

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
