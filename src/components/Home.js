import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import AboutUs from './AboutUs';
import Header from './Header';
import ItemList from './ItemList';

const Home = () => {
   return (
      <Fragment>
         <Link to='/baklavalar'>
            <Header />
         </Link>
         <ItemList />
         <AboutUs />
      </Fragment>
   )
}

export default Home;
