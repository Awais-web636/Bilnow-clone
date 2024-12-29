import React from 'react';
import { motion } from 'framer-motion';
import pulmonology from '../../assets/pulmonology-1.svg';

const Accelerate = () => {
  // Animation Variants
  const imageVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const textVariant = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="grid md:grid-cols-2 gap-2 items-center">
        {/* Image Sliding In from the Left */}
        <motion.div className="relative" variants={imageVariant}>
          <img
            src={pulmonology}
            alt="Medical Billing Consultation Illustration"
            className="w-[350px] sm:w-[400px] md:w-[450px] mx-auto"
          />
        </motion.div>

        {/* Text Sliding In from the Right */}
        <motion.div className="m-5" variants={textVariant}>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3B5A] leading-tight">

            Accelerate The Claims Cycle
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed py-5">
            We understand that healthcare providers lose millions of dollars
             every year due to the inefficient management of medical claims.
              However, partnering with a reliable pulmonology billing company
              like BilNow can help your practice not only stop financial loss
               but also increase your billing collection. We work diligently to
               decrease your outstanding accounts payables by submitting claims
                quickly (within 48 hours) and reducing claim cycles. Approximately
                80% of account receivables are collected for our clients in less than
                 60 days.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Accelerate;
