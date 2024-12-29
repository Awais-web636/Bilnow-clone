import React from 'react';
import { motion } from 'framer-motion';
import img25 from '../../assets/img25.svg';

const QualityCheck = () => {
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
            src={img25}
            alt="Medical Billing Consultation Illustration"
            className="w-[350px] sm:w-[400px] md:w-[450px] mx-auto"
          />
        </motion.div>

        {/* Text Sliding In from the Right */}
        <motion.div className="m-5" variants={textVariant}>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3B5A] leading-tight">
          Quality Checks for Urology Billing
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3B5A] leading-tight">
         Billing
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed py-5">
          Urology procedures are complicated, and even a slight error in
          billing could cause financial loss and legal issues, including
          heavy fines, penalties, etc. However, our medical billing and
          coding audit team actively monitors the performance of billers
           and coders. Each claim goes through an audit process, and we
           take immediate action in case of errors. Regular audits can leave
           no room for expensive mistakes like undercoding, upcoding, unbundling,
            phantom billing, etc.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default QualityCheck;
