import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "./ram.png";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="Brand Logo" />
        </div>
        <div className="nav-elements">
          <ul>
            <li>
              <NavLink to="/10-final-project-samudraam" end>
                about
              </NavLink>
            </li>
            <li>
              <NavLink to="/10-final-project-samudraam/about" end>
                works
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
