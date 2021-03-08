import React from 'react';
import CartIcon from './CartIcon';
import Logo from './Logo';
import './Navbar.scss'
import SearchBar from './SearchBar';
import SocialMedia from './SocialMedia';

const Navbar = () => {
   return (

      <div className="navbar">
         <div className="navbar__side">
            <h1 className="navbar__side__contact"  >Sipariş Hattı: 0544 655 23 32</h1>
            <SearchBar />
         </div>

         <Logo src={process.env.PUBLIC_URL + '/img/logo.svg'} />

         <div className="navbar__side">
            <SocialMedia href="https://instagram.com/markabaklava" text="@markabaklava" />
            <CartIcon />
         </div>
      </div>

   )

}

export default Navbar
