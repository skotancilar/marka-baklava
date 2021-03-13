import React from 'react';
import "./Card.scss"

const Card = ({ src, alt, title, price }) => {
   return (
      <div className="card">

         <div className="card__media">
            <img src={src} alt={alt} />
         </div>

         <div className="card__title"><p>{title}</p></div>

         <div className="card__content"><p>{price}<span>₺/<sub>kg</sub></span></p></div>
      </div>
   )
}

export default Card;
