import React from "react";
import styles from "../styles/Header.module.css";
import logoImage from "../Assets/logo.png";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <h1>Toy Vault </h1>
        <img src={logoImage} alt="Logo" className={styles.logoImage} />
      </div>
      <ul className={styles.navLinks}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#shop">Shop</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
