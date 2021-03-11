import React from 'react';
import './Footer.scss';
import "./Logo.scss"
import Logo from './Logo';
import SocialMedia from './SocialMedia';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CallIcon from '@material-ui/icons/Call';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';

const Footer = () => {
   return (
      <footer className="footer">
         <div className="container-fluid">
            <div className="row">
               <div className="col-lg-4 mb-md-3 d-flex align-items-center justify-content-center">
                  <div className="footer__contact">
                     <h2>Adresimiz</h2>
                     <hr />
                     <ul>
                        <li><LocationOnIcon /><h3>Tüfekçi Yusuf Bulvarı No:152 Şehitkamil/Gaziantep</h3> </li>
                        <li><CallIcon /><h3><a href="tel://905517462326">0551 746 23 26</a></h3></li>
                        <li><AlternateEmailIcon /><h3><a href="mailto:markabaklava@gmail.com">markabaklava@gmail.com</a></h3></li>
                     </ul>
                  </div>
               </div>
               <div className="col-lg-4 d-lg-block d-sm-none d-flex align-items-center justify-content-center">
                  <div className="footer__logo">
                     <Logo src={process.env.PUBLIC_URL + '/img/logo.svg'} />
                  </div>
               </div>
               <div className="col-lg-4 mt-3 mt-lg-0 d-flex align-items-center justify-content-center">
                  <div className="footer__misc">
                     <SocialMedia className="footer__socialMedia" href="https://instagram.com/markabaklava" text="@markabaklava" />
                     <img className="footer__misc_shopier" src={process.env.PUBLIC_URL + '/img/shopier.png'} alt="Shopier Logo" />
                     <img className="footer__misc_guvenli" src={process.env.PUBLIC_URL + '/img/guvenli-alisveris.svg'} alt="Guvenli Alisveris" />
                     <img className="footer__misc_quality" src={process.env.PUBLIC_URL + '/img/quality.png'} alt="%100 Quality" />
                  </div>
               </div>
               <div className="col-12 footer__rights mt-3"><p> Marka Baklava Tüm Haklari Sakldıdır.</p></div>
            </div>
         </div >
      </footer >
   )
}

export default Footer;
