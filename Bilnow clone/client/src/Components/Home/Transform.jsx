import React from "react";
import Trans from '../../assets/transform.webp'


const Transform = () => {
  return (
    <section className="bg-[#1DBFCC] relative text-white py-[50px] px-6 md:px-12 my-[40px]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">



        {/* Text Section */}
        <div className=" max-w-2xl w-full p-8">
          <h1 className="text-4xl font-bold text-white mb-4 ">
            Transform Your Revenue Cycle
          </h1>
          <div className="border-t border-white mb-6"></div>
          <h2 className="text-lg text-white font-medium mb-6 text-center">
            Drive Results With Advanced Medical Billing Solutions
          </h2>

          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-[#FFC567] mb-2 cursor-pointer hover:text-[#002345]">
              Stop Financial Leaks
            </h3>
            <p className="text-black">
              By leveraging sophisticated analytics and robust process controls, we
              identify and address revenue leakage in healthcare billing services.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-[#FFC567] mb-2 cursor-pointer hover:text-[#002345]">
              Billing Process Transparency
            </h3>
            <p className="text-black">
              We provide clear visibility into every stage of the billing process
              with our electronic medical billing services, ensuring that providers
              experience total transparency.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-[#FFC567] mb-2 cursor-pointer hover:text-[#002345]">
              Better Clean Claims Percentage
            </h3>
            <p className="text-black">
              Our automated claim scrubbing tools ensure a higher clean claims percentage, reducing rejections and speeding up reimbursements.
            </p>
          </div>


          <div>
            <h3 className="text-2xl font-semibold text-[#FFC567] mb-2 cursor-pointer hover:text-[#002345]">
              Efficient Denial Management System
            </h3>
            <p className="text-black">
              We optimize denial management through targeted strategies that minimize rejections and boost revenue in healthcare billing services.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-[#FFC567] mb-2 cursor-pointer hover:text-[#002345]">
              Adherence to Compliance
            </h3>
            <p className="text-black">
              We ensure strict adherence to current coding standards and regulatory compliance, helping your practice avoid penalties and audits.            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-[#FFC567] mb-2 cursor-pointer hover:text-[#002345]">
              Faster Payments
            </h3>
            <p className="text-black">
              We optimize electronic claim submissions and follow-up protocols, which results in quicker payments and improved cash flow for your practice.            </p>
          </div>

          <div className="flex justify-start mt-3">
            <button className="bg-[#002345] text-white font-semibold py-2 px-4 rounded transition-transform duration-200 transform hover:bg-[#FFC567] hover:scale-110  flex items-center">
              <span className="mr-2">View All Services</span>
            </button>
          </div>


        </div>

        {/* Image Section */}
        <div className="flex justify-center items-center mt-20 h-[490px]">
          <img
            src={Trans}
            alt="Transform Image"
            className="w-full max-w-[397px] h-auto object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default Transform;
