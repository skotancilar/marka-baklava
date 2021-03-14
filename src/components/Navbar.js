import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import './Navbar.scss'
// import CartIcon from './CartIcon';
// import SearchBar from './SearchBar';
import SocialMedia from './SocialMedia';
import './Logo.scss';
import WhatsApp from './WhatsApp';
import MenuIcon from '@material-ui/icons/Menu';

const Navbar = () => {

   // const hamburger = document.getElementById('sidebar-trigger');

   // let x = true;

   // const toggleSideBar = () => {
   //    window.getElementById('sidebar-trigger').addEventListener(onclick, (e) => {
   //       if (x) {
   //          return false;
   //       } else {
   //          return true
   //       }
   //    })
   // }


   // window.getElementById('sidebar-trigger').addEventListener(onclick, toggleSideBar);




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
               <MenuIcon id='sidebar-trigger' style={{ fontSize: '4rem', margin: '2rem' }} fontSize='large' />
               {/* <CartIcon /> */}
            </div>
         </div>
         {/* <div className="container">
            <div className="row">
               <div className={`offset-6 col-6 text-right`} id='side-bar'>
                  <ul className=''>
                     <li>Urunler</li>
                     <li>Hakkimiz</li>
                     <li>Iletisim</li>
                     <li>Hesaplarimiz</li>
                  </ul>
               </div>
            </div>
         </div > */}
      </React.Fragment >
   );
}

export default Navbar;
