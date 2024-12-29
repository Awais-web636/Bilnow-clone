import React from "react";
import Diffimg from '../../assets/homeabout.webp';
import Cmrs from '../../assets/Cmrs.svg';
import Cpb from '../../assets/Cpb.svg';
import Cca from '../../assets/Cca.svg';
import Cmaa from '../../assets/Cmaa.svg';
import Hipa from '../../assets/Hipaa.svg';
import Cpa from '../../assets/Cpc.svg';

const Herosec = () => {
  return (
    <section className="bg-[#FFFFFF] relative text-white py-[50px] px-6 md:px-12 my-[40px]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Image Section */}
        <div className="flex justify-center md:justify-start mt-8">
          <img
            src={Diffimg}
            alt="Hero Image"
            className="w-full max-w-[544px] h-[437px] object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="pt-[40px] md:pt-[80px]">
          <h1 className="text-3xl md:text-4xl text-[#002345] font-bold mb-6">
            How We're Different
          </h1>
          <p className="text-base md:text-lg text-gray-700 mb-8">
            Our method is unique. We build a specialized team around your
            distinct billing requirements, taking into account factors such as
            your specialty, patient volume, and denial rates. With a structured
            approach to revenue cycle management, each team member focuses on
            their area of expertise, ensuring optimal efficiency. As a leading
            medical billing company in the USA, we offer healthcare providers
            the confidence and peace of mind they need.
          </p>
          <h2 className="text-2xl md:text-3xl text-[#002345] font-bold mb-6">
            Certified Medical Billing
          </h2>
          <div className="flex flex-wrap gap-4">
            <img src={Cmrs} alt="Cmrs" className="w-16 md:w-20" />
            <img src={Cpb} alt="Cpb" className="w-16 md:w-20" />
            <img src={Cca} alt="Cca" className="w-16 md:w-20" />
            <img src={Cmaa} alt="Cmaa" className="w-16 md:w-20" />
            <img src={Hipa} alt="Hipaa" className="w-16 md:w-20" />
            <img src={Cpa} alt="Cpa" className="w-16 md:w-20" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Herosec;
