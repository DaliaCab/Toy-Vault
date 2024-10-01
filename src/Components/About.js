import React from "react";
import imagen1 from "../Assets/Multimedia.jpeg"
import imagen2 from "../Assets/Multimedia (1).jpeg"

const About = () => {
    return (
        <section className={styles.about_section}>
            <div className={styles.about_image}></div>
            <img
            src={imagen1}
            alt=" "
            />

        <div className={Styles.about_text}>

            <h2>About our Store</h2>
            <p>Welcome to our collectible figures website! Here you'll find a variety of exclusive and rare items to add to your collection. Browse through our selection and find your next treasure.</p>
        </div>

        <div className={styles.about_image}>
        <img
        src={imagen2}
        alt=" "
        />
        </div>
        </section>
    );

};

export default About;