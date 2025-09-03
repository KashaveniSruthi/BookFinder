import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../components/Navbar.css";

// Import images
import homeIcon from "../assets/images/home.png";
import favoritesIcon from "../assets/images/favorites.png";
import aboutIcon from "../assets/images/about.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      {/* Logo / Brand */}
      <div className="navbar-logo">📚 BookFinder</div>

      {/* Menu Toggle for Mobile */}
      <div className="menu-toggle" onClick={toggleMenu}>
        ☰
      </div>

      {/* Nav Links */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setIsOpen(false)}
          >
            <img src={homeIcon} alt="Home" className="nav-icon" />
            <span>Home</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/favorites"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setIsOpen(false)}
          >
            <img src={favoritesIcon} alt="Favorites" className="nav-icon" />
            <span>Favorites</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setIsOpen(false)}
          >
            <img src={aboutIcon} alt="About" className="nav-icon" />
            <span>About</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
