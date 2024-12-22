import React from 'react';
import Womanlaptop from '../assets/Womanlaptop.jpg';

const Impact = () => {
  return (

    <div className='flex justify-center items-start gap-8 '>
      <div className='w-[420px] h-[680px] bg-[#FFFFFF] text-[#333333] rounded-[20px] p-8 shadow-lg'>
        <h1 className="text-[24px] font-bold text-center mb-12">
          Looking for Revenue
          <br />
          Impact?
        </h1>
        <form className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Full Name Here"
              className="border-0 border-b border-gray-300 rounded-none px-0 py-2 focus-visible:ring-0 placeholder:text-gray-400 w-full"
              required
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Practice Name"
              className="border-0 border-b border-gray-300 rounded-none px-0 py-2 focus-visible:ring-0 placeholder:text-gray-400 w-full"
              required
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="Email"
              className="border-0 border-b border-gray-300 rounded-none px-0 py-2 focus-visible:ring-0 placeholder:text-gray-400 w-full"
              required
            />
          </div>

          <div>
            <input
              type="tel"
              placeholder="Phone"
              className="border-0 border-b border-gray-300 rounded-none px-0 py-2 focus-visible:ring-0 placeholder:text-gray-400 w-full"
              pattern="[0-9]*"
              required
            />
          </div>

          <div>
            <textarea
              placeholder="Message"
              className="border-0 border-b border-gray-300 rounded-none px-0 py-2 resize-none focus-visible:ring-0 placeholder:text-gray-400 w-full"
              required
            />
          </div>

          <div className="flex items-start space-x-2">
            <input type="checkbox" id="terms" className="mt-1" required />
            <label htmlFor="terms" className="text-sm text-gray-600">
              I acknowledge that I have read and agree to BilNow LLC{' '}
              <a href="/privacy-policy" className="text-[#E91E63] hover:underline">
                Privacy Policy
              </a>
              {' '}and{' '}
              <a href="/terms" className="text-[#E91E63] hover:underline">
                terms and conditions
              </a>
              .
            </label>
          </div>

          <div className="flex items-start space-x-2">
            <input type="checkbox" id="check" className="mt-1" required />
            <label htmlFor="check" className="text-sm text-gray-600">
              By checking this box I agree to receive SMS updates specifically related to Medical Billing Services.
            </label>
          </div>

          <div className="flex justify-center ">
            <button className="bg-[#1DBFCC] text-white font-semibold py-2 px-4 rounded  flex items-center">
              <span className="mr-2">View All Services</span>
            </button>
          </div>
        </form>
      </div>

      <div className='w-[420px] h-[680px]'>
        <img src={Womanlaptop} alt="Woman with laptop" className='rounded-[20px] h-full object-cover shadow-lg' />
      </div>
    </div>
  );
}

export default Impact;
