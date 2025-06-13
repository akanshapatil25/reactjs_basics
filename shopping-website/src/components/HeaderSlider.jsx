import React from 'react';
import { sliderImgs } from '../utils/images';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HeaderSlider = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full">
      <div className="container mx-auto px-4">
        <div className="overflow-x-hidden overflow-y-hidden">
          <Slider {...settings}>
            <div className="max-h-[300px]">
              <img src={sliderImgs[0]} alt="Slide 1" className="w-full object-cover" />
            </div>
            <div className="max-h-[300px]">
              <img src={sliderImgs[1]} alt="Slide 2" className="w-full object-cover" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default HeaderSlider;
