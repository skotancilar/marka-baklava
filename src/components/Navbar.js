import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import './Navbar.scss'
// import SearchBar from './SearchBar';
import SocialMedia from './SocialMedia';
import './Logo.scss';
import WhatsApp from './WhatsApp';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import classNames from 'classnames';
import OutsideClickHandler from 'react-outside-click-handler';

const Navbar = () => {
   const [mobileMenuOpen, setMobileMenuOpen] = useState(true);

   function toggleMenu() {
      setMobileMenuOpen(!mobileMenuOpen);
   }

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
               <div className="navbar__side__menu d-none d-md-block justify-content-center">
                  <ul className="d-flex flex-row justify-content-around">
                     <li>
                        <Link to='/'>
                           <h1 className="navbar__side__title" >Anasayfa</h1>
                        </Link>
                     </li>
                     <li>
                        <Link to='/hakkimizda'>
                           <h1 className="navbar__side__title" >Hakkımızda</h1>
                        </Link>
                     </li>
                     <li>
                        <Link to='/baklavalar'>
                           <h1 className="navbar__side__title" >Ürünlerimiz</h1>
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
               {!mobileMenuOpen ? <CloseIcon onClick={toggleMenu} style={{ fontSize: '4rem', margin: '2rem' }} fontSize='large' /> : <MenuIcon onClick={toggleMenu} style={{ fontSize: '4rem', margin: '2rem' }} fontSize='large' />}
               {/* <CartIcon /> */}
            </div>
         </div>
         <OutsideClickHandler
            onOutsideClick={() => {
               setMobileMenuOpen(true)
            }}>
            <div className={classNames({
               'd-none': false,
            })}>
               <div className={`mobile-sidebar ${classNames({ 'mobile-sidebar__slide': !mobileMenuOpen })} offset-md-7 col-md-5 offset-4 col-8`}>
                  <ul>
                     <li>
                        <Link to='/'>
                           <h1 onClick={toggleMenu}>Anasayfa</h1>
                        </Link>
                     </li>
                     <li>
                        <Link to='/hakkimizda'>
                           <h1 onClick={toggleMenu}>Hakkımızda</h1>
                        </Link>
                     </li>
                     <li>
                        <Link to='/baklavalar'>
                           <h1 onClick={toggleMenu}>Ürünlerimiz</h1>
                        </Link>
                     </li>
                  </ul>
               </div>
            </div>
         </OutsideClickHandler>
      </React.Fragment >
   );
}

export default Navbar;
