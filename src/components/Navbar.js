import React from 'react';
import { Link } from 'react-router-dom';
import CartIcon from './CartIcon';
import Logo from './Logo';
import './Navbar.scss'
// import SearchBar from './SearchBar';
import SocialMedia from './SocialMedia';
import './Logo.scss';


const Navbar = () => {
   return (

      <div className="navbar">
         <div className="navbar__side">
            <h1 className="navbar__side__contact"  >
               <span>Sipariş Hattı:&nbsp;</span>
               <span><a href="tel://905517462326">0551 746 23 26</a></span>
            </h1>
            {/* <SearchBar /> */}
         </div>
         <Link to='/'>
            <div className="navbar__logo">
               <Logo src={process.env.PUBLIC_URL + '/img/logo.svg'} />
            </div>

         </Link>

         <div className="navbar__side">
            <SocialMedia href="https://instagram.com/markabaklava" text="@markabaklava" />
            <CartIcon />
         </div>
      </div>
   );

}

export default Navbar
