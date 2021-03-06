import React from 'react';
import "./SlideItem.scss"

const SlideItem = ({ alt, src }) => {
   return (
      <div className="header__item">
         <img alt={alt} src={process.env.PUBLIC_URL + src} />
      </div>
   )
}

export default SlideItem;;
