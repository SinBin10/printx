import logo from "../assets/logo2.jpg";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <ul className="header-list">
        <li>
          <Link className="header-list-item" to="/about">
            About us
          </Link>
        </li>
        <li>
          <Link className="header-list-item" to="/contact">
            Contact
          </Link>
        </li>
        <li>
          <Link className="header-list-item" to="/services">
            Services
          </Link>
        </li>
      </ul>
      <button className="sign-in-btn">Sign in</button>
    </div>
  );
};

export default Header;
