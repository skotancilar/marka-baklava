import React from 'react';
import './CartIcon.scss'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
   icon: {
      fontSize: 40
   }
}));

const CartIcon = () => {
   const classes = useStyles();
   return (
      <div className="navbar__cart">
         <ShoppingCartIcon className={classes.icon} />
         <span className="navbar__cart__size">2</span>
      </div>
   )
}

export default CartIcon;
