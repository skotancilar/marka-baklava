import React, { useEffect, useState } from 'react';
import Item from './Item';
import firebase from '../firebase'
import './Payment.scss'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import { Link } from 'react-router-dom';

const Payment = ({ match }) => {
   const [baklavalar, setBaklavalar] = useState([]);

   const id = String(match.params.id);
   const recentPortion = Number(id?.slice(0, 1))
   const portionId = Number(id?.slice(1))

   const baklava = baklavalar?.find(baklava => baklava?.portions[recentPortion]?.id === portionId) || {};

   let title = baklava?.title || '';
   let price = baklava?.portions?.map(portion => portion.price) || '';
   let imgUrl = baklava?.portions?.map(portion => portion.imgUrl) || '';

   useEffect(() => {
      const baklavalarRef = firebase.database().ref('baklavalar');
      const listener = baklavalarRef.on("value", (snapshot) => {
         setBaklavalar(snapshot.val());
      });
      return () => baklavalarRef.off('value', listener);
   }, []);

   return (
      <section className="payment">
         <div className="container">
            <div className="payment__title row">
               <h2>Ödeme Seçenekleri</h2>
            </div>
            <div className="row payment__content">
               <div className="col-md-6">
                  <div className="payment__content__item  ">
                     <Item src={process.env.PUBLIC_URL + imgUrl[recentPortion]} title={title} price={price[recentPortion]} id={id} />
                  </div>
               </div>
               <div className="col-md-6 d-flex flex-column justify-content-center  ">
                  <div className="payment__content__options  ml-5">
                     <div className="payment__content__options-eft mb-4">

                        <h3>Değerli Müşterilerimizin Dikkatine!</h3>
                        <ul className="mt-4">
                           <li><b>İNTERNET SİTEMİZ ÜZERİNDEN YAPILAN ALIŞVERİŞLERDE <u>KARGO ÜCRETİ MÜŞTERİMİZE AİTTİR</u>. ORTALAMA TESLİMAT SÜRESİ 1-3 GÜNDÜR.</b></li>
                           <li><b>300 TL ÜZERİ</b> ALIŞVERİŞLERDE KARGO ÜCRETİNİ BİZ KARŞILAMAKTAYIZ.</li>
                           <li> <b><span>ANKARA</span></b> VE <b><span>İSTANBUL’DA</span></b> İKAMET EDEN MÜŞTERİLERİMİZE; <b><u>EFT’Lİ ÖDEMELERDE</u></b> VİP KARGO HİZMETİYLE ÜRÜNLERİMİZİ <b>24 SAAT</b> İÇERİSİNDE ULAŞTIRMAKTAYIZ.</li>
                           <li>MÜŞTERİLERİMİZİN <b><u>EFT’Lİ ÖDEMELERDE</u></b> TÜRKİYE’NİN HER NOKTASINA ŞEHİRLERARASI OTOBÜS İLE ÜRÜNLERİMİZİ ULAŞTIRMAKTAYIZ.</li>
                        </ul>
                     </div>
                     <hr></hr>
                     <div className="payment__content__options-kredikarti mt-3">
                        <Link to="/banka-hesaplari">
                           <button> <AccountBalanceWalletIcon /> EFT ile Ödeme<ArrowRightAltIcon /></button>
                        </Link>
                        <button className="shopier" id={match.params.id.toString()} onClick={(e) => {
                           e.preventDefault();
                           window.location.href = `http://shopier.com/${portionId}`;
                        }}><CreditCardIcon /> Kredi Karti ile Ödeme <ArrowRightAltIcon /> </button>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </section>
   )
}

export default Payment
