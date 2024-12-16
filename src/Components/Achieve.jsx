import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import rcm from '../assets/rcm.svg';
import credentialingicon from '../assets/credentialingicon.svg';
import denialmanagementicon from '../assets/Denialicon.svg';
import medicalauditicon from '../assets/Medicalcon.svg';
import medicalbillingicon from '../assets/Medicalbilling.svg';

const Achieve = () => {
  return (
    <>
      <div className='bg-[#F5F8F9] relative '>
        <div className="container mx-auto py-12 px-12">
          <h1 className="text-[38px] text-center mb-8">
            Achieve Optimal Reimbursements for Your Claims
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { img: rcm, title: "Revenue Cycle Management", desc: "Integrate our scalable revenue cycle management solutions to optimize your cash flow and shorten the payment." },
              { img: credentialingicon, title: "Medical Credentialing", desc: "Successful medical credentialing is one of the significant reasons BilNow stands out from its competitors." },
              { img: denialmanagementicon, title: "Denial Management", desc: "Effective denial management strategies can significantly improve your revenue cycle." },
              { img: denialmanagementicon, title: "Medical Coding", desc: "Effective denial management strategies can significantly improve your revenue cycle." },
              { img: medicalauditicon, title: "Medical Audit", desc: "Our medical audit services ensure compliance and accuracy in billing." },
              { img: medicalbillingicon, title: "Medical Billing", desc: "Streamline your medical billing process with our expert solutions." }
            ].map((item, index) => (
              <div key={index} className="relative bg-white rounded-lg shadow-md overflow-hidden group cursor-pointer transition-transform duration-300">
                <div className="absolute inset-0 bg-teal-500 transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0"></div>
                <div className="relative z-10 p-6">
                  <div className="flex items-center mb-4">
                    <img src={item.img} alt={`image ${item.title}`} className='mr-3' />
                    <div className='flex flex-col'>
                      <h2 className="font-bold text-lg">{item.title}</h2>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                  <div className="absolute bottom-0 right-0">
                    <button
                      className="bg-teal-500 text-white font-semibold w-[60px] h-[60px] rounded-[50%] m-2 flex items-center justify-center transition-transform duration-200 transform group-hover:bg-[#002345] group-hover:scale-110"
                    >
                      <FaArrowRight className='text-[20px]' />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Button to view all services */}
          <div className="flex justify-center mt-16">
            <button className="bg-teal-500 text-white font-semibold py-2 px-4 rounded transition-transform duration-200 transform hover:bg-[#FFC567] hover:scale-110  flex items-center">
              <span className="mr-2">View All Services</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Achieve;
