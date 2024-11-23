

import React, { useEffect, useState } from "react";
import "../css/header.css";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? "active" : ""}`} data-header>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <a href="#top">
          <h1 className="logo">Aditya Dey</h1>
        </a>

        <button
          className="nav-toggle-btn"
          aria-label="Toggle Menu"
          data-nav-toggle-btn
        >
          <ion-icon name="menu-outline" className="menu-icon"></ion-icon>
          <ion-icon name="close-outline" className="close-icon"></ion-icon>
        </button>

        <nav className="navbar">
          <ul className="navbar-list">
            <li>
              <a href="#home" className="navbar-link">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="navbar-link">
                About
              </a>
            </li>
            <li>
              <a href="#portfolio" className="navbar-link">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#skills" className="navbar-link">
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" className="navbar-link">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="btn btn-primary">
                Download CV
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
