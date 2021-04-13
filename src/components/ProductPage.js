import React, { useEffect, useRef, useState } from 'react';
import './App.scss';
import { Link } from 'react-router-dom';
import { makeStyles, FormControl, MenuItem, Select } from '@material-ui/core'
import "./ProductPage.scss";
import firebase from '../firebase';
import Item from './Item';
// import Slider from 'infinite-react-carousel';

const useStyles = makeStyles((theme) => ({
   root: {
      '& .MuiTextField-root': {
         margin: theme.spacing(1),
         width: '25ch',
      },
   },
   formControl: {
      margin: theme.spacing(1, 0, 3),
      minWidth: 120,
      fontSize: '2rem',
      fontFamily: 'inherit',
   },
   selectEmpty: {
      marginTop: theme.spacing(2),
      fontSize: '2rem',
      fontFamily: 'inherit',
      fontWeight: '700'
   }
}));

function ProductPage({ match }) {
   const classes = useStyles();
   const ref = useRef('')
   const [baklavalar, setBaklavalar] = useState([]);
   const [recentPortion, setRecentPortion] = useState('');

   const id = Number(match.params.id);

   const baklava = baklavalar?.find(baklava => baklava.portions[0].id === id) || {};

   let title = baklava?.title || '';
   let portions = baklava?.portions;
   let price = baklava?.portions?.map(portion => portion.price) || '';
   let imgUrl = baklava?.portions?.map(portion => portion.imgUrl) || '';
   let amount = baklava?.portions?.map(portion => portion.amount) || '';
   let portionIds = baklava?.portions?.map(portion => portion.id) || '';

   useEffect(() => {
      const baklavalarRef = firebase.database().ref('baklavalar');
      const listener = baklavalarRef.on("value", (snapshot) => {
         setBaklavalar(snapshot.val());
      });
      return () => baklavalarRef.off('value', listener);
   }, []);


   const handleChange = (event) => {
      setRecentPortion(Number(event.target.value));
   };

   // const settings = {
   //    adaptiveHeight: true,
   //    autoplay: true,
   //    autoplaySpeed: 5000,
   //    initialSlide: 1,
   //    dots: true,
   //    duration: 400,
   //    gutter: 30,
   //    slidesPerRow: 3,
   // };

   const renderMenuItem = portions?.map((_, i) => (
      <MenuItem key={i} value={Number(i)}>  {`${(amount[i].slice(0, 11))} ${title} - ${price[i]} TL`}  </MenuItem>
   ));

   const renderList = baklavalar.map((value, index) => {
      return (
         <div className="item col-md-3 col-sm-4 col-6" key={index.toString()}>
            <Link to={`/baklavalar/${value?.portions[0].id}`}>
               <Item src={process.env.PUBLIC_URL + value?.portions[0].imgUrl} title={value?.title} price={value?.portions[0].price} id={value?.portions[0].id} />
            </Link>
         </div>
      );
   });

   return (
      <section className="product">
         <div className="container-fluid">
            <div className="row pb-5">
               <div className="col-md-6 pr-2">
                  <div className="product__img">
                     <img src={process.env.PUBLIC_URL + (imgUrl[recentPortion] || imgUrl[0])} alt="product" />
                  </div>

               </div>
               <div className="col-md-6 pl-2">
                  <div className="product__info">
                     <div className="product__info__header">
                        <h1>{title}</h1>
                        <h2 >{price[recentPortion] || price[0]}₺</h2>
                     </div>
                     <div className="product__info__description">
                        <h3>{title}</h3>
                        <ul className="mt-4">
                           <li><b>İNTERNET SİTEMİZ ÜZERİNDEN YAPILAN ALIŞVERİŞLERDE KARGO ÜCRETİ MÜŞTERİMİZE AİTTİR. ORTALAMA TESLİMAT SÜRESİ 1-3 GÜNDÜR.</b></li>
                           <li><b>300 TL ÜZERİ</b> ALIŞVERİŞLERDE KARGO ÜCRETİNİ BİZ KARŞILAMAKTAYIZ.</li>
                           <li> <b><span>ANKARA</span></b> VE <b><span>İSTANBUL’DA</span></b> İKAMET EDEN MÜŞTERİLERİMİZE; <b><u>EFT’Lİ ÖDEMELERDE</u></b> VİP KARGO HİZMETİYLE ÜRÜNLERİMİZİ <b>24 SAAT</b> İÇERİSİNDE ULAŞTIRMAKTAYIZ.</li>
                           <li>MÜŞTERİLERİMİZİN <b><u>EFT’Lİ ÖDEMELERDE</u></b> TÜRKİYE’NİN HER NOKTASINA ŞEHİRLERARASI OTOBÜS İLE ÜRÜNLERİMİZİ ULAŞTIRMAKTAYIZ.</li>
                        </ul>
                     </div>
                     <form className="product__info__form" noValidate autoComplete="off">
                        <div>
                           <FormControl className={classes.formControl} ref={ref}>
                              <Select
                                 value={recentPortion}
                                 onChange={handleChange}
                                 displayEmpty
                                 className={classes.selectEmpty}
                                 inputProps={{ 'aria-label': 'Without label' }}
                              >
                                 <MenuItem value=''>
                                    <em>Porsiyon Seçiniz</em>
                                 </MenuItem>
                                 {renderMenuItem}
                              </Select>
                           </FormControl>
                        </div>
                        {portionIds[recentPortion] ? <Link to={`/odeme/${recentPortion}${portionIds[recentPortion]}`}>
                           <button className="shopier">Hemen Al</button>
                        </Link>
                           :
                           null
                        }

                     </form>
                  </div>
               </div>
            </div>
            <div className="container mt-5">
               <div className="product__other ">
                  <h2>DİĞER ÜRÜNLERİMİZ</h2>
               </div>
            </div>
            <div className="product__other__slide mt-5">
               {/* <Slider {...settings}> */}
               <div className="row">
                  {renderList}
               </div>
               {/* <div className="item">
                  <Link to={`/baklavalar/${baklava.id}`}>
                     <Item
                        src={process.env.PUBLIC_URL + baklava.imgUrl}
                        title={baklava.title}
                        price={Array.isArray(baklava.price) ? baklava.price[0] : ''}
                        id={baklava.id}
                     />
                  </Link>
               </div> */}
               {/* </Slider> */}
            </div>
         </div>
      </section>
   );
}

export default ProductPage;
