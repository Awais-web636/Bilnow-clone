import React from 'react';
import { motion } from 'framer-motion';
import img11 from '../../assets/img11.png';


const ConsultationSection = () => {
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
      className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Image Sliding In from the Left */}
        <motion.div className="relative" variants={imageVariant}>
          <img
            src={img11}
            alt="Medical Billing Consultation Illustration"
            className="w-full"
          />
        </motion.div>

        {/* Text Sliding In from the Right */}
        <motion.div className="m-5" variants={textVariant}>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3B5A] leading-tight">
          Optimized Billing & Collections
          </h2>

          <p className="text-gray-700 text-sm leading-relaxed py-5">
          Running a successful healthcare business requires efficiently
          managing patient care and non-core functions. Both business
          aspects require expertise and, more importantly, a considerable
           amount of time. So, to avoid burnout and keep the medical practice
           on the right track, outsourcing dermatology billing services is one
            of the best options dermatologists have. Dermatology medical billing
             experts at BilNow can up your collections ratio and decrease workflow
              hassles. The best aspect of working with us is that we have a solution
               for every concern of yours.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ConsultationSection;