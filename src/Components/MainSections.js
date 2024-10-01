import React from "react";
import imagen3 from "../Assets/imagen (1).png";
import imagen4 from "../Assets/imagen.png";
import imagen5 from "../Assets/Multimedia (2).jpeg";
import imagen6 from "../Assets/Multimedia (3).jpeg";

const MainSections = () => {
    return (
        <div id="carousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={imagen3} className="d-block w-100" alt="imagen3" />
                </div>
                <div className="carousel-item">
                    <img src={imagen4} className="d-block w-100" alt="imagen4" />
                </div>
                <div className="carousel-item">
                    <img src={imagen5} className="d-block w-100" alt="imagen5" />
                </div>
                <div className="carousel-item">
                    <img src={imagen6} className="d-block w-100" alt="imagen6" />
                </div>
            </div>
            
            <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default MainSections;
