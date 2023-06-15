import React from "react";
import "./nav.css";
import logo from "./logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} className="App-logo-navbar" alt="logo" />
      <a className="navbar-brand" href="/">
        Mon Application
      </a>
      <div className="navbar-links">
        <a className="navbar-link" href="/about">
          À propos
        </a>
        <a className="navbar-link" href="/contact">
          Contact
        </a>
        {/* page : home-playlist-about-contact-404 */}
      </div>
    </nav>
  );
};

export default Navbar;
