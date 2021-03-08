import React from 'react'
import Card from './Card';
import "./Item.scss";


const Item = (props) => {
   return (
      <div className="item col-xl-3 col-lg-4 col-6">
         <Card {...props} />
      </div>
   )
}

export default Item;
