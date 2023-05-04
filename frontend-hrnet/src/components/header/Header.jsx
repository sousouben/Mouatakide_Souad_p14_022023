import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import logo from "../../assets/logo Wealth_Health.jpg";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="logo">
          <img src={logo} alt="logo Wealth Health" />
          <Link to="/">
            <h1> HRnet</h1>
          </Link>
        </div>
        <nav>
          <Link to="/create_employees">Create employee</Link>
          <Link to="/employees">Current employees</Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
