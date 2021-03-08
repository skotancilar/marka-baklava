import React from 'react';
import './Logo.scss'


const Logo = ({ src }) => {
   return (
      <div className="navbar__logo">
         <img alt="logo" src={src} />
      </div>
   )
}

export default Logo;
