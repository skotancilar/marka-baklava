import React from 'react';
import './Gallery.scss'

export const Gallery = () => {
   return (

      <div className="section-meals container-fluid">
         <div className="row">
            <ul className="meals-showcase clearfix">
               <li>
                  <figure className="meal-photo">
                     <img src={process.env.PUBLIC_URL + '/img/1.jpg'} alt="Korean bibimbap with egg and vegetables" />
                  </figure>
               </li>
               <li>
                  <figure className="meal-photo">
                     <img src={process.env.PUBLIC_URL + '/img/2.jpg'} alt="Simple italian pizza with cherry tomatoes" />
                  </figure>
               </li>
               <li>
                  <figure className="meal-photo">
                     <img src={process.env.PUBLIC_URL + '/img/3.jpg'} alt="Chicken breast steak with vegetables" />
                  </figure>
               </li>
               <li>
                  <figure className="meal-photo">
                     <img src={process.env.PUBLIC_URL + '/img/4.jpg'} alt="Autumn pumpkin soup" />
                  </figure>
               </li>
            </ul>
            <ul className="meals-showcase clearfix">
               <li>
                  <figure className="meal-photo">
                     <img src={process.env.PUBLIC_URL + '/img/5.jpg'} alt="Paleo beef steak with vegetables" />
                  </figure>
               </li>
               <li>
                  <figure className="meal-photo">
                     <img src={process.env.PUBLIC_URL + '/img/6.jpg'} alt="Healthy baguette with egg and vegetables" />
                  </figure>
               </li>
               <li>
                  <figure className="meal-photo">
                     <img src={process.env.PUBLIC_URL + '/img/7.jpg'} alt="Burger with cheddar and bacon" />
                  </figure>
               </li>
               <li>
                  <figure className="meal-photo">
                     <img src={process.env.PUBLIC_URL + '/img/8.jpg'} alt="Granola with cherries and strawberries" />
                  </figure>
               </li>
            </ul>
         </div>
      </div>
   )
}

export default Gallery;
