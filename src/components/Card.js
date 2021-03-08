import React from 'react';
import "./Card.scss"

const Card = ({ src, alt, title, price }) => {
   return (
      <div className="card">

         <div className="card__media">
            <img src={src} alt={alt} />
         </div>

         <div className="card__title">{title}</div>

         <div className="card__content">{price}<span>₺</span></div>
      </div>
   )
}

export default Card;
