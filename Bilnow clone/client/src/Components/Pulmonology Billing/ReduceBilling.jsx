import React from 'react';
import { motion } from 'framer-motion';
import pulmonology from '../../assets/pulmonology-2.svg';

const ReduceBilling = () => {
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
            Reduce Billing Costs
            </h2>
            <p className="text-gray-700 text-sm  leading-relaxed">
            Did you know managing the in-house billing department is more
            costly than outsourcing pulmonology billing services? Yes! It’s
             true. Teaming up with pulmonology billing service providers can
              help you eliminate high operational costs, including best-in-class
               infrastructure, hiring and training certified billers, and, more
               importantly, higher technology costs. You just need to pay a fixed
                amount to the medical billing companies, and in return, you get
                access to the larger talent pool and get the best return on
                investment.
            </p>

          </motion.div>

          {/* Image Section with Animation */}
          <motion.div
            className="flex justify-center items-center"
            variants={imageVariant}
          >
            <img
              src={pulmonology}
              alt="Financial Benefits Illustration"
              className="w-[300px] sm:w-[350px] md:w-[400px] mx-auto"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ReduceBilling;
