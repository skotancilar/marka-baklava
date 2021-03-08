import React from 'react'

const Card = ({ src, alt, title, price }) => {
   return (
      <div className="card">

         <div className="card-media">
            <img alt={alt} src={src} />
         </div>

         <div className="card-title">{title}</div>

         <div className="card-content">{price}</div>
      </div>
   )
}

export default Card;
