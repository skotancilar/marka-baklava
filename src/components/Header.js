import React from 'react';
import "./Header.scss";
import SlideItem from './SlideItem';
import Slider from 'infinite-react-carousel';
import slayt2 from '../img/slayt2.jpg';
import slayt3 from '../img/slayt-3.jpg';
import slayt4 from '../img/slayt-4.jpg';


const Header = () => {
   const settings = {
      arrows: false,
      autoplay: true,
      autoplaySpeed: 4000,
      centerPadding: 10,
      initialSlide: 1,
      shift: 10,
      virtualList: true
   };
   return (
      <div className="header">
         <Slider {...settings}>
            <SlideItem alt="slide-1" src={slayt2} />
            <SlideItem alt="slide-2" src={slayt3} />
            <SlideItem alt="slide-3" src={slayt4} />
         </Slider>
      </div >
   );
}

export default Header;
