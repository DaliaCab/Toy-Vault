import React from "react";
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>room</h1>
      </div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#shop">Shop</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;