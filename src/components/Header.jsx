import logo from "../assets/logo2.jpg";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <ul className="header-list">
        <li className="header-list-item">About us</li>
        <li className="header-list-item">Contact</li>
        <li className="header-list-item">Services</li>
      </ul>
      <button className="sign-in-btn">Sign in</button>
    </div>
  );
};

export default Header;
