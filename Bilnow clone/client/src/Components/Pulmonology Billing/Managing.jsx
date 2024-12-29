import React from 'react';
import { motion } from 'framer-motion';
import pulmonology from '../../assets/pulmonology-5.svg';

const Managing = () => {
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
          Managing Payer-Specific
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3B5A] leading-tight">
           Requirements
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed py-5">
          Pulmonology billing can get tricky with varying Medicare,
           Medicaid, and private insurers’ policies. Each payer has
           unique guidelines that frequently change, creating compliance
           challenges. Staying updated on these requirements is crucial to
            avoid claim denials and delayed payments. Our team ensures
            accurate billing and smooth reimbursement by navigating and
            adhering to every payer’s regulations so you can focus on patient
             care without the stress of administrative hurdles.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Managing;
