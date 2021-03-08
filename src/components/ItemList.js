import React from 'react';
import Item from './Item';

const ItemList = () => {
   const Products = {
      pic: "",

   }


   return (
      <section className="products">
         <div className="container">
            <div className="row">
               <Item />
               <Item />
               <Item />
               <Item />
            </div>
         </div>
      </section>
   )
}

export default ItemList
