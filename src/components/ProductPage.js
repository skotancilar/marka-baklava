import React, { useState } from 'react';
import './App.scss';
import { Link } from 'react-router-dom'
import { Button, makeStyles, withStyles, FormControl, FormHelperText, MenuItem, Select } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import "./ProductPage.scss";
import { baklavalar } from '../apis/data';
import Item from './Item';
import Slider from 'infinite-react-carousel';

const useStyles = makeStyles((theme) => ({
   root: {
      '& .MuiTextField-root': {
         margin: theme.spacing(1),
         width: '25ch',
      },
   },
   format: {
      fontSize: '2.5rem',
      fontFamily: 'Montserrat',
      marginTop: '3rem',
      borderRadius: 0
   },
   formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      fontSize: '2rem'
   },
   selectEmpty: {
      marginTop: theme.spacing(2),
      fontSize: '2rem',
   }
}));


const ColorButton = withStyles((theme) => ({
   root: {
      color: theme.palette.getContrastText(red[500]),
      backgroundColor: red[500],
      '&:hover': {
         backgroundColor: red[700],
      },
   },
}))(Button);



const ProductPage = ({ match }) => {
   const id = Number(match.params.id);

   const classes = useStyles();

   const [miktar, setMiktar] = useState('');
   // const [total, setTotal] = useState(0)

   const handleChange = (event) => {
      setMiktar(event.target.value);
   };

   // const reportWindowSize = () => {
   //    console.log(window.innerWidth);
   //    return (window.innerWidth < 578) ? 1 : 3;
   // }



   // window.addEventListener('resize', reportWindowSize);



   const settings = {
      adaptiveHeight: true,
      autoplay: true,
      className: 'slide_products',
      autoplaySpeed: 5000,
      initialSlide: 1,
      dots: true,
      duration: 400,
      gutter: 30,
      slidesPerRow: 3,
   };


   const baklava = baklavalar?.find(baklava => baklava.id === id);



   let title = '';
   let price = null;
   let imgUrl = '';
   let amount = '';

   if (baklava) {
      title = baklava.title;
      price = baklava.price;
      imgUrl = baklava.imgUrl;
      amount = baklava.amount;
   }

   let randomId = ((baklava.id + 7) % 11) + 1
   const renderMenuItem = baklava.price.map((value, i) => <MenuItem value={price[i]}>{`${amount[i]} - ${price[i]} TL`}</MenuItem>)

   const renderList = baklavalar.map((baklava, index) => {
      return (
         <div className="item">
            <Link to={`/baklavalar/${baklava.id}`}>
               < Item src={process.env.PUBLIC_URL + baklava.imgUrl} title={baklava.title} price={baklava.price[0]} id={baklava.id} key={index.toString()} />
            </Link>
         </div>
      );
   });



   return (
      <section className="product">
         <div className="container-fluid">
            <div className="row pt-2 pb-5">
               <div className="col-md-6 pr-2">
                  <div className="product__img">
                     <img src={process.env.PUBLIC_URL + imgUrl} alt="asdas" />
                  </div>

               </div>
               <div className="col-md-6 pl-2">
                  <div className="product__info">
                     <div className="product__info__header">
                        <h1>{title}</h1>
                        <h2>{miktar || price[0]}₺</h2>
                     </div>
                     <div className="product__info__description">
                        <h3>{title}</h3>
                     </div>
                     <form className="product__info__form" noValidate autoComplete="off" >
                        <div>
                           <FormControl className={classes.formControl}>
                              <Select
                                 value={miktar}
                                 onChange={handleChange}
                                 displayEmpty
                                 className={classes.selectEmpty}
                                 inputProps={{ 'aria-label': 'Without label' }}
                              >
                                 <MenuItem value=''>
                                    <em>Miktar Seçiniz</em>
                                 </MenuItem>
                                 {renderMenuItem}
                              </Select>
                              <FormHelperText></FormHelperText>
                           </FormControl>
                           {/* <div>
                              <TextField

                                 className={classes.adet}
                                 id="adet"
                                 label="Adet"
                                 type="number"
                                 // onInput={onAdetChange}
                                 InputLabelProps={{
                                    shrink: true,
                                    style: { fontSize: '2rem' },
                                 }}
                                 InputProps={{
                                    inputProps: { max: 100, min: 1 },
                                    style: {
                                       minWidth: '5rem',
                                       fontSize: '2rem',
                                       marginTop: '25px'
                                    },
                                 }}
                              />
                           </div> */}
                        </div>
                        <ColorButton variant="contained" color="primary" className={classes.format}>
                           Hemen Al
                        </ColorButton>
                     </form>
                  </div>
               </div>
            </div>
            <div className="container mt-5">
               <div className="product__other row">
                  <h2>DİĞER ÜRÜNLERİMİZ</h2>
               </div>
            </div>
            <div className="product__other__slide mt-5">
               <Slider {...settings}>
                  {renderList}
                  <Link to={`/baklavalar/${baklavalar[randomId].id}`}>
                     < Item src={process.env.PUBLIC_URL + baklavalar[randomId].imgUrl} title={baklavalar[randomId].title} price={baklavalar[randomId].price[0]} id={baklavalar[randomId].id} />
                  </Link>

               </Slider>
            </div>

         </div>
      </section>
   )
}

export default ProductPage;
