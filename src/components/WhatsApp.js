import React from 'react';
import './WhatsApp.scss';

const WhatsApp = ({ src, alt }) => {
   return (
      <div className="whatsapp">
         <img src={src} alt={alt} />
      </div>
   )
}

export default WhatsApp;
