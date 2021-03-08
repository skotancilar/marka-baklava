import React from 'react'

const Item = (props) => {
   return (
      <div className="col-xl-3 col-lg-4 col-md-6">
         {props.children}
      </div>
   )
}

export default Item;
