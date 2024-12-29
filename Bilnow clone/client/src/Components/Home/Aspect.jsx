import React, { useState } from 'react';
import Slider from 'react-slick';
import { FileText, DollarSign, FileCheck, ClipboardCheck } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const slides = [
  {
    icon: FileText,
    title: 'Insurance Contract Negotiation',
    description:
      'As a trusted medical billing agency, we handle tough negotiations with insurers to secure favorable terms for your practice.',
  },
  {
    icon: DollarSign,
    title: 'Reimbursement Negotiations',
    description:
      'We negotiate reimbursements effectively, addressing payment discrepancies and maximizing revenue for your healthcare practice.',
  },
  {
    icon: FileCheck,
    title: 'Appeals',
    description:
      'We manage denied claims appeals, improving your revenue cycle and securing rightful reimbursements.',
  },
  {
    icon: ClipboardCheck,
    title: 'Compliance Review',
    description:
      'We conduct comprehensive compliance reviews, identifying billing inaccuracies and ensuring adherence to industry regulations.',
  },
];

export default function RevenueSlider() {
  const [activeIndex, setActiveIndex] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
    <div className="max-w-7xl mx-auto px-12 py-16 bg-[#EDF3F6]">
      <h1 className="text-[35px] text-center text-[#002B5B] mb-16">
        Own Every Aspect of Your Revenue Cycle
      </h1>

      <Slider {...settings} className="revenue-slider -mx-4">
        {slides.map((slide, index) => {
          const Icon = slide.icon;
          return (
            <div
              key={index}
              className="px-4"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div
                className={`relative h-full p-8 rounded-lg transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between ${
                  index === 1 ? 'bg-[#002B5B] text-white' : 'bg-white text-gray-700'
                }`}
                style={{ minHeight: '300px', display: 'flex' }} // Ensure the card is a flex container
              >
                <div
                  className={`absolute inset-0 bg-[#002B5B] transition-all duration-500 ease-in-out origin-top-left ${
                    activeIndex === index ? 'scale-100' : 'scale-0'
                  }`}
                  style={{
                    transformOrigin: '0 0',
                  }}
                />
                <div className="relative z-10 flex-grow">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-colors duration-300 ${
                      activeIndex === index || index === 1 ? 'bg-white' : 'bg-[#E6F4F1]'
                    }`}
                  >
                    <Icon
                      className={`w-8 h-8 transition-colors duration-300 ${
                        activeIndex === index || index === 1 ? 'text-[#002B5B]' : 'text-[#40B9B3]'
                      }`}
                      aria-hidden="true" // Add aria-hidden for accessibility
                    />
                  </div>
                  <h3
                    className={`text-2xl font-semibold mb-4 transition-colors duration-300 ${
                      activeIndex === index || index === 1 ? 'text-white' : 'text-gray-700'
                    }`}
                  >
                    {slide.title}
                  </h3>
                  <p
                    className={`text-base transition-colors duration-300 ${
                      activeIndex === index || index === 1 ? 'text-white' : 'text-gray-600'
                    }`}
                  >
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}