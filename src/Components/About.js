import React from "react";
import imagen1 from "../Assets/Multimedia.jpeg";
import imagen2 from "../Assets/Multimedia (1).jpeg";
import styles from "../styles/About.module.css"; 

const About = () => {
    return (
        <section className={styles.about_section}>
            <div className={styles.about_container}>
            <div className={`${styles.about_image} informacion`}>
                    <img src={imagen1} alt="Descripción de la imagen 1" />
                    <p>
                    Este set incluye tres muñecas inspiradas en el estilo anime,
                    con detalles únicos y personalizados. 
                    Cada una está diseñada con trajes únicos y 
                    expresiones faciales distintivas que capturan 
                    la esencia de tus personajes favoritos de anime.
                    </p>
                </div>

                <div className={styles.about_text}>
                    <h2>Sobre nuestra tienda</h2>
                    <p>¡Bienvenido a nuestro sitio web de figuras coleccionables! Aquí encontrarás una variedad de artículos exclusivos y raros para agregar a tu colección. Explora nuestra selección y encuentra tu próximo tesoro.</p>
                </div>

                <div className={styles.about_image}>
                    <img src={imagen2} alt="Descripción de la imagen 2" />
                </div>
            </div>
        </section>
    );
};

export default About;
