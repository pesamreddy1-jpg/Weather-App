import {
  FaCloudSun,
  FaHome,
  FaCalendarAlt,
  FaStar,
  FaSignInAlt
} from "react-icons/fa";

import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      {/* Logo */}

      <div className="navbar-logo">

        <div className="logo-icon">
          <FaCloudSun />
        </div>

        <span>
          Weather<span>App</span>
        </span>

      </div>


      {/* Navigation Links */}

      <div className="nav-links">

        <a href="#">
          <FaHome />
          <span>Home</span>
        </a>

        <a href="#">
          <FaCalendarAlt />
          <span>Forecast</span>
        </a>

        <a href="#">
          <FaStar />
          <span>Favorites</span>
        </a>

      </div>


      {/* Login Button */}

      <button className="login-button">

        <FaSignInAlt />

        <span>Login</span>

      </button>

    </nav>
  );
}

export default Navbar;