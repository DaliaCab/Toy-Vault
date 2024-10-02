import React, { useState } from "react";
import imagen3 from "../Assets/imagen (1).png";
import imagen4 from "../Assets/imagen.png";
import imagen5 from "../Assets/Multimedia (2).jpeg";
import imagen6 from "../Assets/Multimedia (3).jpeg";
import styles from "../styles/MainSections.module.css";

const MainSections = () => {
  const images = [imagen3, imagen4, imagen5, imagen6];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
        <img
          src={images[currentImageIndex]}
          alt={`imagen${currentImageIndex + 1}`}
          className={styles.carouselImage}
        />
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

export default MainSections;
