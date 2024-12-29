import React from 'react';
import { motion } from 'framer-motion';
import img16 from '../../assets/img16.png';

const FinancialBenefits = () => {
  // Animation Variants
  const textVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const imageVariant = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="bg-gray-100 py-16">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid md:grid-cols-2  items-center">
          {/* Text Section with Animation */}
          <motion.div className="space-y-6 p-12" variants={textVariant}>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3B5A] leading-tight">
              Dedicated Support
            </h2>
            <p className="text-gray-700 text-sm  leading-relaxed">
            Your success is our top priority. We appoint dedicated managers
            to each healthcare practice to ensure efficient operations and
            personalized nephrology billing solutions. Your dedicated BilNow
            team will maintain non-stop communication while focusing on achieving
            or exceeding industry standards for your nephrology practice’s measurable
             key performance indicators (KPIs). We are an extension of your team, dedicated
             to providing outstanding services.
            </p>

          </motion.div>

          {/* Image Section with Animation */}
          <motion.div
            className="flex justify-center items-center"
            variants={imageVariant}
          >
            <img
              src={img16}
              alt="Financial Benefits Illustration"
              className="w-[300px] sm:w-[350px] md:w-[400px] mx-auto"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default FinancialBenefits;
