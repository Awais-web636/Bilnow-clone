import React from 'react';
import img6 from '../../assets/img6.png';



const InternalMedicien = () => {
  return (
   <div className="relative min-h-screen flex items-center justify-center bg-gray-100">
      {/* Background Image */}
      <img
        src={img6}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center  bg-opacity-80 p-10 rounded-lg shadow-lg">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-normal mb-8 text-white">
        Change The Way You Get Paid Dermatology Billing Services
        </h1>

        {/* Description */}
        <p className="text-sm md:text-xl leading-relaxed mb-10 text-white">
        Why look for medical billing companies when you can get a full suite of
        dermatology billing services in one place? With BilNow, healthcare providers
        gain access to dedicated account managers, provider credentialing, comprehensive
         reporting, specialized medical coding across multiple specialties, and much more.
          BilNow delivers everything you need, all under one roof.
        </p>

        {/* CTA Button */}
        <button className="bg-[#4CC3C3] hover:bg-orange-300 hover:text-black text-white font-medium px-8 py-3 rounded-lg transition-colors duration-200">
          Schedule A Free Demo
        </button>
      </div>
    </div>

  );
};

export default InternalMedicien;