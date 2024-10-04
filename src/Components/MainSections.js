import React, { useState, useEffect } from "react";
import imagen3 from "../Assets/imagen (1).png";
import imagen4 from "../Assets/imagen.png";
import imagen5 from "../Assets/Multimedia (2).jpeg";
import imagen6 from "../Assets/Multimedia (3).jpeg";
import styles from "../styles/MainSections.module.css";

const MainSections = () => {
  const images = [imagen3, imagen4, imagen5, imagen6];
  const texts = [
    { text: "Gran apertura de tienda online de anime, una experiencia unica, ¡Únete a nuestra comunidad   y vive la pasión por el anime al máximo!.", buttonText: "Únete a la zona kawaii" },
    { text: "Figuras exclusivas a precios increíbles, tenemos la mejor calidad y garantia en cada compra. ¡No te lo pierdas!", buttonText: "Compra ahora" },
    { text: "Colecciones únicas de todos tus géneros favoritos: ecchi, gore, isekai, shone, yaoi, yuri y muchos más. ¡También puedes personalizar tus figuras!. ", buttonText: "Contáctanos" },
    { text: "Descubre las muñecas anime kawaii más adorables, compra con confianza y añade magia tu colección", buttonText: "Descubre" },
  ];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
    setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
          );
        }, 4000); // Cambia cada 4  segundos

      
      return () => clearInterval(interval);// Limpiar el intervalo cuando el componente se desmontereturn() =>clearInterval(interval);
    },[images.length]);

  const handlePrev = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex(
      currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1
    );
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselInner}>

        <div className={styles.carouselImageContainer}>
          <img
            src={images[currentImageIndex]}
            alt={`Slide ${currentImageIndex + 1}`}
            className={styles.carouselImage}
          />
        </div>
        
        {/* Texto y botón */}
        <div className={styles.carouselTextContainer}>
          <h2>{texts[currentImageIndex].text}</h2>
          <button>{texts[currentImageIndex].buttonText}</button>
        </div>
      </div>

      {/* Botones de navegación */}
      <button onClick={handlePrev} className={styles.carouselControlPrev}>
        &#8249;
      </button>
      <button onClick={handleNext} className={styles.carouselControlNext}>
        &#8250;
      </button>
    </div>
  );
};
export default MainSections