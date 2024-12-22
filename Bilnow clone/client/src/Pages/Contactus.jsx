import React from 'react'
import Header from '../Components/Header';
import Contactbanner from '../assets/Contactbanner.webp'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer';
const Contactus= ()=> {
  return (
    <>
        <Header />
        <div className="flex flex-col md:flex-row items-center justify-center min-h-screen my-8 bg-gray-100">
      {/* Left Section */}
      <div className="md:w-1/2 p-6 text-center md:text-left">
        <h1 className="text-[38px] font-semibold mb-4 text-[#002345]">Thank you for showing your interest</h1>
        <p className="text-[#002345] mb-6 text-[16px]">
          Thank you for showing your interest! Please fill out the form, and our
          team will reach out to you shortly to schedule your personalized demo.
          We look forward to demonstrating how our medical billing solutions can
          benefit your practice.
        </p>
        <div className="flex items-center justify-center md:justify-start">
          <img
            src={Contactbanner}
            alt="Smiling Nurse"
            className=" w-[484px] h-[508px]"
          />
        </div>
      </div>
       {/* Right Section */}
       <div className="w-[500px] bg-white shadow-lg rounded-lg p-6 ">
        <h2 className="text-[28px] font-semibold text-[#1DBFCC] mb-4">Let's get connected</h2>
        <p className="text-[#002345] text-[16px] mb-6">
          Please provide the following information so our team can connect with
          you within 12 hours. Or call us at +1 78 781 8169
        </p>
        <form className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Phone"
              className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Practice Name"
              className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Annual Revenue"
              className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Total AR"
              className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <textarea
            placeholder="Message"
            className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            ></textarea>
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
          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold py-3 w-full rounded-lg hover:bg-blue-600 transition"
          >
            Submit Now
          </button>
        </form>
      </div>
    </div>
    <Contact/>
    <Footer/>
    </>
  )
}

export default Contactus
