import React from 'react';
import "./SlideItem.scss"

const SlideItem = ({ alt, src }) => {
   return (
      <div className="header__item">
         <img alt={alt} src={src} />
      </div>
   )
}

export default SlideItem;;
