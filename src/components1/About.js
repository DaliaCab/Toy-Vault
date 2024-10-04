import React, { useState } from "react";
import imagen1 from "../assets1/Multimedia.jpeg";
import imagen2 from "../assets1/Multimedia (1).jpeg";
import styles from "../styles1/About.module.css";

const About = () => {
  const [clickedImage, setClickedImage] = useState(null); // Estado para controlar la imagen clickeada

  const handleClick = (imageNumber) => {
    // Alternar la imagen clickeada
    setClickedImage(clickedImage === imageNumber ? null : imageNumber);
  };

  return (
    <section className={styles.about_section}>
      <div className={styles.about_container}>
        {/* Primera tarjeta con imagen y descripción */}
        <div
          className={`${styles.about_image} ${
            clickedImage === 1 ? styles.clicked : ""
          }`}
          onClick={() => handleClick(1)}
        >
          <img src={imagen1} alt="Descripción de la imagen 1" />
          <div className={styles.informacion}>
            <p>
              Este set incluye tres muñecas inspiradas en el estilo anime, con
              detalles únicos y personalizados. Cada una está diseñada con
              trajes únicos y expresiones faciales distintivas que capturan la
              esencia de tus personajes favoritos de anime.
            </p>
          </div>
        </div>

        {/* Texto de descripción */}
        <div className={styles.about_text}>
          <h2>Sobre nuestra tienda</h2>
          <h3>
            ¡Bienvenido a nuestro sitio web de figuras coleccionables! Aquí
            encontrarás una variedad de artículos exclusivos y raros para
            agregar a tu colección. Explora nuestra selección y encuentra tu
            próximo tesoro.
          </h3>
        </div>

        {/* Segunda tarjeta con imagen y descripción */}
        <div
          className={`${styles.about_image} ${
            clickedImage === 2 ? styles.clicked : ""
          }`}
          onClick={() => handleClick(2)}
        >
          <img src={imagen2} alt="Descripción de la imagen 2" />
          <div className={styles.informacion}>
            <p>
              Colección exclusiva de figuras coleccionables. Figuras de alta
              calidad inspiradas en personajes de anime que agregarán valor a tu
              colección.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
