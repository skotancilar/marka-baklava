import React, { Fragment } from 'react';
import Gallery from './Gallery';
import Header from './Header';
import ItemList from './ItemList';
import './ProductPage.scss'

const Home = () => {
   return (
      <Fragment>
         <Header />
         <ItemList />
         <div className="container">
            <div className="product__info__description">
               <h3 style={{ backgroundColor: '#FE4F34', color: "white" }} className="mt-5">Değerli Müşterilerimizin Dikkatine!</h3>
               <ul className="mt-5">
                  <li><b>İNTERNET SİTEMİZ ÜZERİNDEN YAPILAN ALIŞVERİŞLERDE KARGO ÜCRETİ MÜŞTERİMİZE AİTTİR. ORTALAMA TESLİMAT SÜRESİ 1-3 GÜNDÜR.</b></li>
                  <li><b>300 TL ÜZERİ</b> ALIŞVERİŞLERDE KARGO ÜCRETİNİ BİZ KARŞILAMAKTAYIZ.</li>
                  <li> <b><span>ANKARA</span></b> VE <b><span>İSTANBUL’DA</span></b> İKAMET EDEN MÜŞTERİLERİMİZE; <b><u>EFT’Lİ ÖDEMELERDE</u></b> VİP KARGO HİZMETİYLE ÜRÜNLERİMİZİ <b>24 SAAT</b> İÇERİSİNDE ULAŞTIRMAKTAYIZ.</li>
                  <li>MÜŞTERİLERİMİZİN <b><u>EFT’Lİ ÖDEMELERDE</u></b> TÜRKİYE’NİN HER NOKTASINA ŞEHİRLERARASI OTOBÜS İLE ÜRÜNLERİMİZİ ULAŞTIRMAKTAYIZ.</li>
               </ul>
            </div>
         </div>
         <Gallery />
      </Fragment>
   );
}

export default Home;
