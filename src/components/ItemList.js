import React, { useEffect, useState } from 'react';
import Item from './Item';
import "./ItemList.scss";
import data from "../apis/data";
import { Link } from 'react-router-dom';

const ItemList = (props) => {
   const [baklavalar, setBaklavalar] = useState([]);

   const getData = async () => {
      const response = await data.get('/baklavalar');

      setBaklavalar(response.data);
   }

   useEffect(() => {
      getData();
      return () => {

      }
   }, []);



   const renderList = baklavalar.map(baklava => {
      return (
         <div className="item col-xl-3 col-lg-4 col-6">
            <Link to={`/baklavalar/${baklava.id}`} exact>
               < Item src={process.env.PUBLIC_URL + baklava.pic} title={baklava.title} price={baklava.price} id={baklava.id} key={baklava.id} />
            </Link>
         </div>
      );
   });

   console.log(renderList);


   return (
      <section className="products">
         <div className="container">
            <div className="row ">
               {renderList}
            </div>
         </div>
      </section>
   );
}

export default ItemList;
