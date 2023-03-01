import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import logo from "../../assets/logo Wealth_Health.jpg";

const Header = () => {
  return (
    <>
      <header className="header">
        <img src={logo} alt="logo Wealth Health" />
        <nav>
          <Link to="/">Create employee</Link>
          <Link to="/employees">Current employees</Link>
        </nav>
        <div className="h1">
          <h1> HRnet</h1>
        </div>
      </header>
    </>
  );
};

export default Header;
