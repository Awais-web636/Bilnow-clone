import React from 'react';
import img14 from '../../assets/img14.png';



const Financial = () => {
  return (
   <div className="relative min-h-screen flex items-center justify-center bg-gray-100">
      {/* Background Image */}
      <img
        src={img14}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center  bg-opacity-80 p-10 rounded-lg shadow-lg">
        {/* Heading */}
        <h1 className="text-2xl md:text-6xl font-normal mb-4  text-white">
        Nephrology Billing Services
        </h1>
        <h1 className="text-2xl md:text-6xl font-normal mb-2 text-white">
        Leave No Room For Financial
        </h1>
        <h1 className="text-2xl md:text-6xl font-normal mb-4 text-white">
       Lose
        </h1>

        {/* Description */}
        <p className="text-xs md:text-lg leading-relaxed  text-white">
        With decade-long expertise in healthcare revenue cycle management,
         we offer
        </p>
        <p className="text-xs md:text-lg leading-relaxed  text-white">
        advanced nephrology billing services to increase the billing
         collection ratio
        </p>
        <p className="text-xs md:text-lg leading-relaxed mb-10 text-white">
        significantly reduce the days in accounts receivable.
        </p>

        {/* CTA Button */}
        <button className="bg-[#4CC3C3]  hover:bg-orange-300 hover:text-black text-white text-xs font-medium px-8 py-3 rounded-lg transition-colors duration-200">
          Schedule A Free Demo
        </button>
      </div>
    </div>

  );
};

export default Financial;
