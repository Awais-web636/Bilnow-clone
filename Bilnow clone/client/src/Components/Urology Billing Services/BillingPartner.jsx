import React from 'react';
import img20 from '../../assets/img20.png';



const BillingPartner = () => {
  return (
   <div className="relative min-h-screen flex items-center justify-center ">
      {/* Background Image */}
      <img
        src={img20}
        alt="Background"
        className="absolute inset-0 w-full h-[550px] object-cover"
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center  bg-opacity-80 p-10 rounded-lg shadow-lg">
        {/* Heading */}
        <h1 className="text-2xl md:text-6xl font-normal   text-white">
        Your Reliable Urology Medical
        </h1>
        <h1 className="text-2xl md:text-6xl font-normal mb-8 text-white">
        Billing Partner
        </h1>


        {/* Description */}
        <p className="text-xs md:text-sm leading-relaxed   text-white">
        As a resourceful urology billing company, BilNow adds value to your healthcare.
        </p>
        <p className="text-xs md:text-sm leading-relaxed  text-white">
        practice. We provide expert guidance and advanced urology b solutions to
        </p>
        <p className="text-xs md:text-sm leading-relaxed mb-8 text-white">
        manage patients’ bills and medical records.
        </p>

        {/* CTA Button */}
        <button className="bg-[#4CC3C3]  hover:bg-orange-300 hover:text-black text-white text-xs font-medium px-8 py-3 rounded-lg transition-colors duration-200">
          Schedule A Free Demo
        </button>
      </div>
    </div>

  );
};

export default BillingPartner;
