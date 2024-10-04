import React, { useState } from "react";
import styles from "../styles1/Header.module.css";
import logoImage from "../assets1/logo.png";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); //Agregamos un estado para que controle si el menú de navegación está abierto o cerrado
  const cambiarMenu = () => {
    setIsMenuOpen(isMenuOpen ? false : true); //Si isMenuOpen es true (el menú está abierto), entonces lo cierra (lo cambia a false) y viceversa
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <h1>Toy Vault</h1>
        <img src={logoImage} alt="Logo" className={styles.logoImage} />
      </div>

      <div className={styles.menuIcon} onClick={cambiarMenu}>
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
