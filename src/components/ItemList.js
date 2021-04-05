import React, { useEffect, useState } from 'react';
import Item from './Item';
import "./ItemList.scss";
import { Link } from 'react-router-dom';
import firebase from '../firebase'

const ItemList = (props) => {
   const [baklavalar, setBaklavalar] = useState([]);
   useEffect(() => {

      const baklavalarRef = firebase.database().ref('baklavalar');
      const listener = baklavalarRef.on("value", (snapshot) => {
         setBaklavalar(snapshot.val());
      });
      return () => { baklavalarRef.off('value', listener); }
   }, []);

   const renderList = baklavalar.map((baklava, index) => {
      return (
         <div className="item col-xl-3 col-lg-4 col-6" key={index.toString()}>
            <Link to={`/baklavalar/${baklava.portions[0].id}`}>
               < Item src={process.env.PUBLIC_URL + baklava?.portions[0]?.imgUrl} title={baklava.title} price={baklava.portions[0].price} id={baklava.portions[0].id} />
            </Link>
         </div>
      );
   });

   return (
      <section className="products">
         <div className="container">
            <div className="row">
               <h1>ÜRÜNLERİMİZ</h1>
            </div>
            <div className="row ">
               {renderList}
            </div>
         </div>
      </section>
   );
}

export default ItemList;
