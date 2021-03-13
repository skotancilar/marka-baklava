import React from 'react';
import "./Header.scss";
import SlideItem from './SlideItem';
import Slider from 'infinite-react-carousel';

const Header = () => {
   const settings = {
      arrows: false,
      autoplay: true,
      autoplaySpeed: 6000,
      initialSlide: 1,
      shift: 10,
   };
   return (
      <div className="header">
         <Slider {...settings}>
            <SlideItem alt="slide-1" src={'/img/slayt-1.jpg'} />
            <SlideItem alt="slide-2" src={'/img/slayt-2.jpg'} />
            <SlideItem alt="slide-4" src={'/img/slayt-4.jpg'} />
            <SlideItem alt="slide-5" src={'/img/slayt-5.jpg'} />
         </Slider>
      </div >
   );
}

export default Header;
