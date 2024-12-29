import React from "react";
import { FaProcedures } from "react-icons/fa";
import { IoWaterSharp } from "react-icons/io5";
import { GiKidneys } from "react-icons/gi";
import { LuBrain } from "react-icons/lu";
import { RiLungsLine } from "react-icons/ri";

function Special() {
  const specialties = [
    {
      title: "Internal Medicine Billing",
      description:
        "Our medical billing experts handle complex disease management billing while ensuring accuracy.",
      icon: <FaProcedures className="text-[50px] text-[#1DBFCC]" />,
    },
    {
      title: "Dermatology Billing",
      description:
        "We manage billing for extensive dermatology procedures, ensuring timely reimbursements.",
      icon: <IoWaterSharp className="text-[50px] text-[#1DBFCC]" />,
    },
    {
      title: "Nephrology Billing",
      description:
        "We’re well vested with managing medical billing for dialysis, renal, and other nephrology procedures.",
      icon: <GiKidneys className="text-[50px] text-[#1DBFCC]" />,
    },
    {
      title: "Urology Billing",
      description:
        "We seamlessly manage billing for cystoscopies, lithotripsy, and other urology procedures.",
      icon: <GiKidneys className="text-[50px] text-[#1DBFCC]" />,
    },
    {
      title: "Medical Heath Billing",
      description:
        "We provide customized mental health billing so don't lose your hard-earned revenue.",
      icon: <LuBrain className="text-[50px] text-[#1DBFCC]" />,
    },
    {
      title: "Pulmonology Billing",
      description:
        "Whether it's lung function tests, bronchoscopy, or other procedures, we are here to help you with billing.",
      icon: <RiLungsLine className="text-[50px] text-[#1DBFCC]" />,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto text-left px-12">
        <h2 className="text-3xl font-semibold text-gray-800 text-center">
          Our Specialties
        </h2>
        <p className="mt-2 text-gray-600 text-center">
          Empowering Healthcare Providers In Their Financial Journey
        </p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <div
              key={index}
              className="relative bg-white p-6 rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            >
              {/* Sliding Blue Overlay */}
              <div className="absolute inset-0 bg-[#002345] opacity-0 group-hover:opacity-100 transform -translate-y-full group-hover:translate-y-0 transition duration-500"></div>

              {/* Content */}
              <div className="relative z-10">
                <div className="flex flex-col items-start mb-3">
                  <div className="text-[50px] text-[#1DBFCC] mb-2">
                    {specialty.icon}
                  </div>
                  <h3 className="text-xl font-medium text-gray-800 group-hover:text-white">
                    {specialty.title}
                  </h3>
                </div>
                <p className="text-gray-600 group-hover:text-white">{specialty.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-[#002345] text-white font-semibold py-2 px-4 rounded transition-transform duration-200 transform hover:bg-[#FFC567] hover:scale-110  flex items-center">
            <span className="mr-2">View All Specialties</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Special;
