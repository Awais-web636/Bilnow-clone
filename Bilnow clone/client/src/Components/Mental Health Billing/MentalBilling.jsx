import React from 'react';
import img27 from '../../assets/img27.png';

const MentalBilling = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-100">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={img27}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center bg-opacity-70 p-10 rounded-lg shadow-lg">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl  mb-8 text-white">
        Mental Health Billing
        </h1>

        {/* Description */}
        <p className="text-sm md:text-sm leading-relaxed text-gray-100">
        Whether you provide substance abuse treatment, psychiatric care, or any other

        </p>
        <p className="text-sm md:text-sm leading-relaxed  text-gray-100">
        type of psychological intervention, we can handle the mental health billing
          </p>
          <p className="text-sm md:text-sm leading-relaxed mb-10 text-gray-100">
          process for you with reliability and efficiency.
          </p>

        {/* CTA Button */}
        <button className="bg-[#4CC3C3] hover:bg-orange-300 hover:text-black text-white text-sm  px-8 py-3 rounded-lg transition-colors duration-200">
          Schedule A Free Demo
        </button>
      </div>
    </div>
  );
};

export default MentalBilling;
