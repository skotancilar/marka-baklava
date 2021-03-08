import React from 'react';
import CartIcon from './CartIcon';
import Logo from './Logo';
import './Navbar.scss'
import SearchBar from './SearchBar';
import SocialMedia from './SocialMedia';
import logo from '../img/logo.svg'
const Navbar = () => {
   return (

      <div className="navbar">
         <div className="navbar__side">
            <p className="navbar__side__contact"  >Sipariş Hattı: 0544 655 23 32</p>
            <SearchBar />
         </div>

         <Logo src={logo} />

         <div className="navbar__side">
            <SocialMedia href="https://instagram.com/markabaklava" text="@markabaklava" />
            <CartIcon />
         </div>
      </div>

   )

}

export default Navbar
