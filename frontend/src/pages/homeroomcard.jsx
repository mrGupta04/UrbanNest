import React from 'react';
import './homecard.css';
function Card({ image, city }) {
    return (
        <div className="card">
            <img src={image} alt={city} className="card-image" />
            <p className="card-city">{city}</p>
        </div>
    );
}

export default Card;
