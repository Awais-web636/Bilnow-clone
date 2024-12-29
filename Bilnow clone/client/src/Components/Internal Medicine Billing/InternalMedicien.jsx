import React from 'react';
import img1 from '../../assets/img1.png';



const InternalMedicien = () => {
  return (
   <div className="relative min-h-screen flex items-center justify-center bg-gray-100">
      {/* Background Image */}
      <img
        src={img1}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center  bg-opacity-80 p-10 rounded-lg shadow-lg">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-normal mb-8 text-white">
          Internal Medicine Billing
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl leading-relaxed mb-10 text-white">
          Are you spending your prime time overcoming billing challenges rather
          than focusing on patients' care? If so, you need the help of an industry
          expert like BilNow. We stay on top of constantly changing billing and
          coding practices to ensure the best outcomes for healthcare providers.
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
