import React, { useState } from "react";
import styles from "../styles/Header.module.css";
import logoImage from "../Assets/logo.png";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <h1>Toy Vault</h1>
        <img src={logoImage} alt="Logo" className={styles.logoImage} />
      </div>

      <div className={styles.menuIcon} onClick={toggleMenu}>
        &#9776; {/* Ícono de hamburguesa */}
      </div>

      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ""}`}>
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

