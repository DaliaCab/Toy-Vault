import React, { useState, useEffect } from "react";
import imagen3 from "../assets1/imagen (1).png";
import imagen4 from "../assets1/imagen.png";
import imagen5 from "../assets1/Multimedia (2).jpeg";
import imagen6 from "../assets1/Multimedia (3).jpeg";
import styles from "../styles1/MainSections.module.css";

const MainSections = () => {
  const [index, setIndex] = useState(0);
  const slides = [
    {
      img: imagen3,
      text: "Gran apertura de tienda online de anime, una experiencia única. ¡Únete a nuestra comunidad y vive la pasión por el anime al máximo!",
      buttonText: "Únete a la zona kawaii",
    },
    {
      img: imagen4,
      text: "Figuras exclusivas a precios increíbles, tenemos la mejor calidad y garantia en cada compra. ¡No te lo pierdas!",
      buttonText: "Compra ahora",
    },
    {
      img: imagen5,
      text: "Colecciones únicas de todos tus géneros favoritos: ecchi, gore, isekai, shone, yaoi, yuri y muchos más. ¡También puedes personalizar tus figuras!",
      buttonText: "Contáctanos",
    },
    {
      img: imagen6,
      text: "Descubre las muñecas anime kawaii más adorables, compra con confianza y añade magia tu colección.",
      buttonText: "Descubre",
    },
  ];

  const nextPage = () => {
    setIndex((index + 1) % slides.length);
  };

  const prevPage = () => {
    setIndex((index - 1 + slides.length) % slides.length);
  };

  // Auto-cambio de página
  useEffect(() => {
    const intervalId = setInterval(nextPage, 8000); // Cambia cada 8 segundos
    return () => clearInterval(intervalId); // Limpia el intervalo al desmontar
  });

  return (
    <div className={styles.carrusel}>
      <div
        className={styles.hoja}
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map(
          (
            hoja,
            i // Añadido las llaves para el mapeo
          ) => (
            <div className={styles.pagina} key={i}>
              <img
                src={hoja.img}
                alt={`Imagen de ${hoja.text}`}
                className={styles.imagen}
              />
              <div className={styles.texto}>
                <h2>{hoja.text}</h2>
                <button className={styles.botonTexto}>{hoja.buttonText}</button>
                {/* Agregado el botón del texto*/}
              </div>
            </div>
          )
        )}
      </div>
      <button onClick={prevPage} className={`${styles.boton} ${styles.prev}`}>
        &#8249;
      </button>{" "}
      {/*Los botones de prev y next*/}
      <button onClick={nextPage} className={`${styles.boton} ${styles.next}`}>
        &#8250;
      </button>
    </div>
  );
};
export default MainSections;
