import React from 'react';
import img26 from '../../assets/img26.png';



const BillingSerives = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-100">
      {/* Background Image */}
      <img
        src={img26}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center  bg-opacity-80 p-10 rounded-lg shadow-lg">
        {/* Heading */}
        <h1 className="text-2xl md:text-6xl font-normal mb-8  text-white">
          Pulmonology Billing Services
        </h1>


        {/* Description */}
        <p className="text-xs md:text-sm leading-relaxed  text-white">
          BilNow has proven experience and repute for working with multiple pulmonary
        </p>
        <p className="text-xs md:text-sm leading-relaxed  text-white">
          practices & helping them uplift their practices to the ultimate heights
          of growth.
        </p>
        <p className="text-xs md:text-sm leading-relaxed  text-white">
          Let us handle your pulmonology medical billing services & get
          back to doing what
        </p>
        <p className="text-xs md:text-sm leading-relaxed mb-12 text-white">
          you do best patient care.
        </p>

        {/* CTA Button */}
        <button className="bg-[#4CC3C3]  hover:bg-orange-300 hover:text-black text-white text-xs font-medium px-8 py-3 rounded-lg transition-colors duration-200">
          Schedule A Free Demo
        </button>
      </div>
    </div>

  );
};

export default BillingSerives;