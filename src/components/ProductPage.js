import { Button, FormControl, FormHelperText, makeStyles, withStyles, MenuItem, Select, TextField } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import React from 'react';
import "./ProductPage.scss";

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

const ProductPage = () => {
   const classes = useStyles();
   const [miktar, setMiktar] = React.useState('');

   const handleChange = (event) => {
      setMiktar(event.target.value);
   };

   return (
      <section className="product">
         <div className="container-fluid">
            <div className="row py-2">
               <div className="col-md-6 pr-2">
                  <div className="product__img">
                     <img src={process.env.PUBLIC_URL + '/img/1-fistikli-baklava.jpg'} alt="asdas" />
                  </div>

               </div>
               <div className="col-md-6 pl-2">
                  <div className="product__info">
                     <div className="product__info__header">
                        <h1>Fistikli Baklava</h1>
                        <h2>120 ₺</h2>
                     </div>
                     <div className="product__info__description">
                        <h3>Fistikli Baklava</h3>
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
                              <MenuItem value={0.5}>0,5 Kg. Paket - 60 TL</MenuItem>
                              <MenuItem value={1}>1 Kg. Paket - 120 TL</MenuItem>
                              <MenuItem value={2}>2 Kg. TEPSI - 250 TL</MenuItem>
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
                           Sepete Ekle
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
