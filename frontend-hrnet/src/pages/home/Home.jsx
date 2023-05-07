import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faUsers } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <main>
      <div className="home_header">
        <h2 className="home">Bienvenue sur la nouvelle version HRnet</h2>
        <br />
        <p className="home_texte">
          votre portail de gestion des employés WealthHealth. Nous sommes ravis
          de vous présenter notre nouvelle application, qui a été entièrement
          repensée et mise à jour pour répondre aux besoins de votre entreprise.
        </p>
      </div>
      <div className="card">
        <button className="home_card">
          <FontAwesomeIcon icon={faUserPlus} />{" "}
          <Link to="/create_employees">Create employee</Link>
        </button>
        <button className="home_card">
          <FontAwesomeIcon icon={faUsers} />{" "}
          <Link to="/employees">Current employees</Link>
        </button>
      </div>
    </main>
  );
};

export default Home;
