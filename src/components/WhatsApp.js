import React from 'react';
import './WhatsApp.scss';

const WhatsApp = ({ src, alt }) => {
   return (
      <div className="whatsapp">
         <a href='https://api.whatsapp.com/send?phone=905517462326' target='_blank' rel="noreferrer"><img src={src} alt={alt} /></a>
      </div >
   )
}

export default WhatsApp;
