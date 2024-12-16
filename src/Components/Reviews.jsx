import React from "react";
import Slider from "react-slick";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Rebeecatestimonial from "../assets/Rebeecatestimonial.webp";
import Kevintestimonial from "../assets/Kevintestimonial.webp";
import Michealtestimonial from "../assets/Michealtestimonial.webp";
import Doctorimg from "../assets/Doctorimg.webp";

const slides = [
  {
    icon: Rebeecatestimonial,
    name: "Rebecca Parker",
    namedes: "Change Entry Specialist",
    description:
      "BILNOW transformed our billing process completely. Their attention to detail and commitment to accuracy have reduced errors and improved our revenue capture. We couldnt be happier with the level of service and professionalism they provide",
  },
  {
    icon: Kevintestimonial,
    name: "Kevin Turner",
    namedes: "Compliance Officer",
    description:
      "BILNOW transformed our billing process completely. Their attention to detail and commitment to accuracy have reduced errors and improved our revenue capture. We couldnt be happier with the level of service and professionalism they provide",
  },
  {
    icon: Michealtestimonial,
    name: "Michael R.",
    namedes: "CFO of Medical Facility",
    description:
      "BILNOW transformed our billing process completely. Their attention to detail and commitment to accuracy have reduced errors and improved our revenue capture. We couldnt be happier with the level of service and professionalism they provide",
  },
  {
    icon: Doctorimg,
    name: "Sandra Edwards",
    namedes: "Medical Billing Manager",
    description:
      "BILNOW transformed our billing process completely. Their attention to detail and commitment to accuracy have reduced errors and improved our revenue capture. We couldnt be happier with the level of service and professionalism they provide",
  },
];

function CustomPrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute left-[-25px] top-1/2 transform -translate-y-1/2 custom-arrow custom-prev-arrow flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full cursor-pointer hover:bg-yellow-500"
      onClick={onClick}
    >
      <AiOutlineLeft className="text-gray-700 hover:text-white w-6 h-6" />
    </div>
  );
}

function CustomNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute right-[-25px] top-1/2 transform -translate-y-1/2 custom-arrow custom-next-arrow flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full cursor-pointer hover:bg-yellow-500"
      onClick={onClick}
    >
      <AiOutlineRight className="text-gray-700 hover:text-white w-6 h-6" />
    </div>
  );
}

export default function RevenueSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false, // Disable autoplay
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#FFFFFF] mt-[600px] relative">
      <div className="w-[1130px] h-[490px] px-8 py-12 rounded-lg shadow-lg relative bg-[#EDF3F6]">
        <h1 className="absolute top-[-100px] left-1/2 transform -translate-x-1/2 text-[35px] text-[#002B5B] mb-4 z-20">
          What Our Client Says
        </h1>
        <Slider {...settings} className="revenue-slider">
          {slides.map((slide, index) => (
            <div key={index} className="px-4">
              <div className="relative h-[400px] w-[1000px] p-8 mx-[20px] rounded-lg overflow-hidden cursor-pointer  text-gray-700">
                <div className="relative z-10 flex justify-between gap-[200px]">
                  <div>
                    <img
                      src={slide.icon}
                      alt={slide.name}
                      className="w-[362px] h-[429px]"
                    />
                  </div>
                  <div>
                    <div className="max-w-2xl p-8">
                      {/* Quote Icon */}
                      <div className="mb-4">
                        <svg
                          width="48"
                          height="48"
                          viewBox="0 0 48 48"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-cyan-400"
                        >
                          <path
                            d="M12.5 24H19.5L22.5 15V12H10.5V24L13.5 35H19.5L12.5 24Z"
                            fill="currentColor"
                          />
                          <path
                            d="M28.5 24H35.5L38.5 15V12H26.5V24L29.5 35H35.5L28.5 24Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>

                      {/* Star Rating */}
                      <div className="flex gap-1 mb-6">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg
                            key={star}
                            className="w-6 h-6 text-amber-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>

                      {/* Testimonial Text */}
                      <p className="mb-8 text-[16px] leading-relaxed text-navy-800">
                        {slide.description}
                      </p>

                      {/* Author Info */}
                      <div className="space-y-1">
                        <h3 className="text-xl font-bold text-navy-900">
                          {slide.name}
                        </h3>
                        <p className="text-gray-600">{slide.namedes}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
