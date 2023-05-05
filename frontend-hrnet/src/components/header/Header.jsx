import { NavLink, useLocation } from "react-router-dom";
import "./header.css";
import logo from "../../assets/logo Wealth_Health.jpg";

const Header = () => {
  const location = useLocation();
  let activeClassName = "display";

  return (
    <>
      <header className="header">
        <div className="logo">
          <img src={logo} alt="logo Wealth Health" />
          <NavLink to="/">
            <h1> HRnet</h1>
          </NavLink>
        </div>
        <nav>
          <ul>
            {location.pathname !== "/" && (
              <li>
                <NavLink
                  to="/employees"
                  className={({ isActive }) =>
                    isActive ? activeClassName : undefined
                  }
                >
                  Current Employees
                </NavLink>
              </li>
            )}
            {location.pathname !== "/" && (
              <li>
                <NavLink
                  to="/create_employees"
                  className={({ isActive }) =>
                    isActive ? activeClassName : undefined
                  }
                >
                  Create Employees
                </NavLink>
              </li>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
