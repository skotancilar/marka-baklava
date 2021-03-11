import React, { useEffect, useState } from 'react';
import { Button, makeStyles, withStyles, FormControl, FormHelperText, MenuItem, Select, TextField } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import "./ProductPage.scss";
import { baklavalar } from '../apis/data'

const useStyles = makeStyles((theme) => ({
   root: {
      '& .MuiTextField-root': {
         margin: theme.spacing(1),
         width: '25ch',
      },
   },
   format: {
      fontSize: '2rem',
      fontFamily: 'Montserrat',
   },
   formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
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
   const classes = useStyles();
   const [miktar, setMiktar] = useState('');
   const [baklavaId, setBaklavaId] = useState({});

   const handleChange = (event) => {
      setMiktar(event.target.value);
   };

   useEffect(() => {
      setBaklavaId(Number(match.params.id));
   }, [match.params.id]);


   const baklava = baklavalar.find(baklava => baklava.id === baklavaId);


   console.log(baklavalar);
   console.log(baklavaId);
   console.log(baklava);
   console.log(match.params.id);

   const { title, price, pic } = baklava

   return (
      <section className="product">
         <div className="container-fluid">
            <div className="row py-2">
               <div className="col-md-6 pr-2">
                  <div className="product__img">
                     <img src={process.env.PUBLIC_URL + pic} alt="asdas" />
                  </div>

               </div>
               <div className="col-md-6 pl-2">
                  <div className="product__info">
                     <div className="product__info__header">
                        <h1>{title}</h1>
                        <h2>{price._1kg}</h2>
                     </div>
                     <div className="product__info__description">
                        <h3>{title}</h3>
                     </div>
                     <form className="product__info__form" noValidate autoComplete="off" >
                        <FormControl className={classes.formControl}>
                           <Select
                              value={miktar}
                              onChange={handleChange}
                              displayEmpty
                              className={classes.selectEmpty}
                              inputProps={{ 'aria-label': 'Without label' }}
                           >
                              <MenuItem value="">
                                 <em>Miktar Seciniz</em>
                              </MenuItem>
                              <MenuItem value={price._1kg}>{`1 Kg. Paket - ${price._1kg} TL`}</MenuItem>
                              <MenuItem value={price._2kg}>{`2 Kg. TEPSI + TEPSI BEDELI - ${price._2kg} TL`}</MenuItem>
                              <MenuItem value={price._3kg}>{`3 Kg. TEPSI + TEPSI BEDELI - ${price._3kg} TL`}</MenuItem>
                           </Select>
                           <FormHelperText></FormHelperText>
                        </FormControl>
                        <div>
                           <TextField
                              className={classes.adet}
                              id="standard-number"
                              label="Adet"
                              type="number"
                              InputLabelProps={{
                                 shrink: true,
                                 style: { fontSize: '2rem' },
                              }}
                              InputProps={{
                                 inputProps: { max: 100, min: 1 },
                                 style: {
                                    fontSize: '2rem',
                                    marginTop: '25px'
                                 },
                              }}
                           />
                        </div>

                        <ColorButton variant="contained" color="primary" className={classes.format}>
                           Hemen Al
                        </ColorButton>
                     </form>
                  </div>
               </div>
            </div>

         </div>
      </section>
   )
}

export default ProductPage;
