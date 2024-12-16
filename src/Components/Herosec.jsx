import React from "react";
import Heroimg from '../assets/bannerimg.webp';

const Herosec = () => {
  return (
    <section className="bg-[#002345] relative text-white py-[50px] px-6 md:px-12 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-start gap-20">
        {/* Text Section */}
        <div className="pt-[80px]">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Secure and Compliant Medical Billing Services
          </h1>
          <p className="mb-6 text-lg">
            Why let medical billing stress you out and take time away from patient care? Let us alleviate your burden. As a leading medical billing outsourcing company, we offer cost-effective solutions to streamline your administrative tasks. Whether you need focused support in certain areas or comprehensive billing services, we’re here to simplify your workload.
          </p>
          <button className="bg-teal-400 text-blue-900 font-semibold py-2 px-6 rounded hover:bg-teal-500 transition">
            Free Consultation
          </button>
        </div>

        {/* Image Section */}
        <div className="flex justify-center md:justify-center mt-8">
          <img
            src={Heroimg}
            alt="Hero Image"
            className="w-[600px] h-[400px] object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Herosec;
