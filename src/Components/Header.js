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
          <a href="#home">Inicio</a>
        </li>
        <li>
          <a href="#shop">Tienda</a>
        </li>
        <li>
          <a href="#about">Sobre nosotros</a>
        </li>
        <li>
          <a href="#contact">Contáctanos</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
