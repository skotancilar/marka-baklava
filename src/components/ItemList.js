import React/*, { useEffect, useState }*/ from 'react';
import Item from './Item';
import "./ItemList.scss";
import { baklavalar } from "../apis/data";
import { Link } from 'react-router-dom';

const ItemList = (props) => {
   // const [baklavalar, setBaklavalar] = useState([]);

   // const getData = async () => {
   //    const response = await data.get('/baklavalar');

   //    setBaklavalar(response.data);
   // }

   // useEffect(() => {
   //    getData();
   //    return () => {

   //    }
   // }, []);

   const renderList = baklavalar.map((baklava, index) => {
      return (
         <div className="item col-xl-3 col-lg-4 col-6">
            <Link to={`/baklavalar/${baklava.id}`}>
               < Item src={process.env.PUBLIC_URL + baklava.imgUrl} title={baklava.title} price={baklava.price[0]} id={baklava.id} key={index.toString()} />
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
