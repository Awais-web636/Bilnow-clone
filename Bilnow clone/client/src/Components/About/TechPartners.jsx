import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import PointClick from "../../assets/PointCLick.webp";
import Kareo1 from "../../assets/kareo1.webp";
import Eclinical from "../../assets/Eclinical.webp";
import Athena1 from "../../assets/Athena1.webp";
import Advanced from "../../assets/Advanced.webp";

const TechPartners = () => {
  const logos = [PointClick, Kareo1, Eclinical, Athena1, Advanced];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
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
    <div className="flex flex-col items-center py-8 bg-[#ebf2fa]">
      {/* Heading */}
      <h1 className="text-[32px] mb-8 text-center text-[#002345]">Our Technology Partners</h1>

      {/* Logo Slider */}
      <div className="w-full max-w-5xl">
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center items-center">
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                className="h-32 object-contain bg-transparent"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TechPartners;
