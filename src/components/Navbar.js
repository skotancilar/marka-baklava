import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import './Navbar.scss'
// import SearchBar from './SearchBar';
import SocialMedia from './SocialMedia';
import './Logo.scss';
import WhatsApp from './WhatsApp';
import MenuIcon from '@material-ui/icons/Menu';

const Navbar = () => {
   return (
      <React.Fragment>
         <div className="navbar">
            <div className="navbar__side">

               <h1 className="navbar__side__contact"  >
                  <WhatsApp src={process.env.PUBLIC_URL + '/img/whatsapp.svg'} alt="WhatsApp logo" />
                  <div>
                     <span>Sipariş Hattı:&nbsp;</span>
                     <span><a href="tel://905517462326">0551 746 23 26</a></span>
                  </div>
               </h1>
               <div className="d-none d-md-block">
                  <ul className="d-flex justify-content-center">
                     <li>
                        <Link to='/'>
                           <h1 className="navbar__side__contact" >Anasayfa</h1>
                        </Link>
                     </li>
                     <li>
                        <Link to='/hakkimizda'>
                           <h1 className="navbar__side__contact" >Hakkımızda</h1>
                        </Link>
                     </li>
                     <li>
                        <Link to='/hakkimizda'>
                           <h1 className="navbar__side__contact" >İletişim</h1>
                        </Link>
                     </li>
                  </ul>

               </div>
               {/* <SearchBar /> */}
            </div>

            <Link to='/'>
               <div className="navbar__logo">
                  <Logo src={process.env.PUBLIC_URL + '/img/logo.svg'} />
               </div>
            </Link>

            <div className="navbar__side">
               <SocialMedia href="https://instagram.com/markabaklava" text="@markabaklava" />
               <img className='d-none d-md-block' src={process.env.PUBLIC_URL + '/img/logo.svg'} alt='logo' style={{ width: '6rem', height: 'auto', marginRight: '2rem' }} />
               <MenuIcon id='sidebar-trigger' style={{ fontSize: '4rem', margin: '2rem' }} fontSize='large' />
               {/* <CartIcon /> */}
            </div>
         </div>
      </React.Fragment >
   );
}

export default Navbar;
