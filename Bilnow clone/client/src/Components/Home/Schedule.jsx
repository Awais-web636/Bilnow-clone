import React from "react";
import { FaCheck } from "react-icons/fa";
import Makeschedule from '../../assets/Makeschedule.webp';

const Schedule = () => {
  return (
    <section className="bg-[#FFFFFF] relative text-white py-[50px] px-6 md:px-12 my-[40px]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Image Section */}
        <div className="flex justify-center md:justify-start mt-8">
          <img
            src={Makeschedule}
            alt="Hero Image"
            className="w-full max-w-[520px] h-[330px] object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="space-y-6 flex flex-col justify-between">
          <div>
            <p className="text-[16px] font-bold text-[#002345]">Make a Schedule</p>

            <h1 className="text-[38px] w-[500px] h-[136px] font-bold tracking-tight leading-tight text-[#121212] mb-3">
              Transform the Billing <br /> Process with Hyperautomation
            </h1>

            <ul className="space-y-4">
              {[
                "Tailored in-house automation solutions",
                "Automation of Repetitive Tasks",
                "Reduced Manual Errors, Faster Reimbursement",
                "Proactive Issue Resolution"
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="rounded-full bg-[#002345] cursor-pointer hover:bg-[#FFC567] p-1">
                    <FaCheck className="w-2 h-2" />
                  </div>
                  <span className="text-lg text-gray-900">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Button Section */}
          <div className="flex justify-start mt-3">
            <button className="bg-[#002345] text-white font-semibold py-2 px-4 rounded transition-transform duration-200 transform hover:bg-[#FFC567] hover:scale-110 flex items-center">
              <span className="mr-2">View All Services</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Schedule;