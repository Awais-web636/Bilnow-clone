import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import PointClick from '../assets/PointCLick.webp';
import Kareo1 from '../assets/kareo1.webp';
import Eclinical from '../assets/Eclinical.webp';
import Athena1 from '../assets/Athena1.webp';
import Advanced from '../assets/Advanced.webp';

const LogoSliderSection = () => {
  const logos = [
    PointClick,
    Kareo1,
    Eclinical,
    Athena1,
    Advanced,
  ];

  const NextArrow = ({ onClick }) => (
    <div
      className="absolute top-1/2 right-[-25px] transform -translate-y-1/2 cursor-pointer z-10"
      onClick={onClick}
    >
      <div className="w-8 h-8 bg-white flex justify-center items-center rounded-full shadow-lg">
        <span className="text-gray-600">&gt;</span>
      </div>
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      className="absolute top-1/2 left-[-25px] transform -translate-y-1/2 cursor-pointer z-10"
      onClick={onClick}
    >
      <div className="w-8 h-8 bg-white flex justify-center items-center rounded-full shadow-lg">
        <span className="text-gray-600">&lt;</span>
      </div>
    </div>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false, // Autoplay disabled
    nextArrow: <NextArrow />, // Custom next arrow
    prevArrow: <PrevArrow />, // Custom prev arrow
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col items-center py-8 bg-[#FFFFFF] relative">
      {/* Heading */}
      <h1 className="text-[35px] mb-8 text-center">Our Technology Partners</h1>

      {/* Logo Slider */}
      <div className="w-full max-w-5xl relative">
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center items-center">
              <img src={logo} alt={`Logo ${index + 1}`} className="h-24 object-contain bg-transparent" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default LogoSliderSection;
