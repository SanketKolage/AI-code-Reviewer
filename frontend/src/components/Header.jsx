import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <a href="/">AI CODE REVIEWER</a>
      </div>
      <nav className={`nav ${isMobileMenuOpen ? "active" : ""}`}>
        <ul className="nav-list">
          <li>
            <a href="/">Home</a>
          </li>
         
         
        </ul>
      </nav>
      <div className="menu-toggle" onClick={toggleMobileMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </header>
  );
};

export default Header;