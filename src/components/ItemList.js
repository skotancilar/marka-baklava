import React, { useEffect, useState } from 'react';
import Item from './Item';
import "./ItemList.scss";
import data from "../apis/data";

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
      return < Item src={process.env.PUBLIC_URL + baklava.pic} title={baklava.title} price={baklava.price} id={baklava.id} key={baklava.id} />
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
