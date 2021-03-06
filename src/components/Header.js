import React from 'react';
import "./Header.scss";
import SlideItem from './SlideItem';
import Slider from 'infinite-react-carousel/lib/index';

const Header = () => {
   const settings = {
      arrows: false,
      autoplay: true,
      autoplaySpeed: 4000,
      initialSlide: 0,
   };
   return (
      <div className="header">
         <Slider {...settings}>
            <SlideItem alt="slide-1" src={'/img/slayt-1.jpg'} />
            <SlideItem alt="slide-2" src={'/img/slayt-2.jpg'} />
            <SlideItem alt="slide-3" src={'/img/slayt-3.jpg'} />
            <SlideItem alt="slide-4" src={'/img/slayt-4.jpg'} />
         </Slider>
      </div >
   );
}

export default Header;
