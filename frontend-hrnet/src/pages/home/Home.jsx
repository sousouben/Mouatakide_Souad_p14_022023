import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faUsers } from "@fortawesome/free-solid-svg-icons";

/**
 * Composant Home qui affiche la page d'accueil de l'application HRnet.
 * @returns {JSX.Element} Composant Home
 *
 */
const Home = () => {
  return (
    <main>
      <div className="home_header">
        <h2 className="home">Welcome to the new HRnet version</h2>
        <br />
        <p className="home_texte">
          Your WealthHealth employee management portal. We're excited to
          introduce our new app, which has been completely redesigned and
          updated to meet your business needs.
        </p>
      </div>
      <div className="card">
        <Link to="/create_employees">
          <button className="home_card">
            <FontAwesomeIcon icon={faUserPlus} /> Create employee
          </button>
        </Link>
        <Link to="/employees">
          <button className="home_card">
            <FontAwesomeIcon icon={faUsers} /> Current employees
          </button>
        </Link>
      </div>
    </main>
  );
};

export default Home;
