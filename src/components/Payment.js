import React, { useEffect, useState } from 'react';
import Item from './Item';
import firebase from '../firebase'
import './Payment.scss'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

const Payment = ({ match }) => {
   const [baklavalar, setBaklavalar] = useState([]);
   const id = Number(match.params.id);

   const baklava = baklavalar?.find(baklava => baklava.id === id) || {};

   let title = baklava.title || '';
   // eslint-disable-next-line react-hooks/exhaustive-deps
   let price = baklava.price || [];
   let imgUrl = baklava.imgUrl || '';
   // let amount = baklava.amount || '';

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
            <div className="payment__content row">
               <div className="payment__content__item col-6 d-flex ">
                  <Item src={process.env.PUBLIC_URL + imgUrl} title={title} price={price[0]} id={id} />
               </div>
               <div className="payment__content__options col-6 d-flex flex-column">
                  <div className="payment__content__options-eft  mb-5">
                     <button className="shopier" id={match.params.id}>EFT ile Ödeme Bildir <ArrowRightAltIcon /></button>
                     <h3>Banka Hesap Bilgileri</h3>
                     <ul className="mt-4">
                        <li><b>İNTERNET SİTEMİZ ÜZERİNDEN YAPILAN ALIŞVERİŞLERDE KARGO ÜCRETİ MÜŞTERİMİZE AİTTİR. ORTALAMA TESLİMAT SÜRESİ 1-3 GÜNDÜR.</b></li>
                        <li><b>300 TL ÜZERİ</b> ALIŞVERİŞLERDE KARGO ÜCRETİNİ BİZ KARŞILAMAKTAYIZ.</li>
                        <li> <b><span>ANKARA</span></b> VE <b><span>İSTANBUL’DA</span></b> İKAMET EDEN MÜŞTERİLERİMİZE; <b><u>EFT’Lİ ÖDEMELERDE</u></b> VİP KARGO HİZMETİYLE ÜRÜNLERİMİZİ <b>24 SAAT</b> İÇERİSİNDE ULAŞTIRMAKTAYIZ.</li>
                        <li>MÜŞTERİLERİMİZİN <b><u>EFT’Lİ ÖDEMELERDE</u></b> TÜRKİYE’NİN HER NOKTASINA ŞEHİRLERARASI OTOBÜS İLE ÜRÜNLERİMİZİ ULAŞTIRMAKTAYIZ.</li>
                     </ul>
                  </div>
                  <hr></hr>
                  <div className="payment__content__options-kredikarti mt-3">
                     <button className="shopier" id={match.params.id}>Kredi Karti ile Ödeme <ArrowRightAltIcon /></button>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Payment
