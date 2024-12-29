import React from 'react';
import { motion } from 'framer-motion';
import img15 from '../../assets/img15.png';

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
      className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="grid md:grid-cols-2 gap-2 items-center">
        {/* Image Sliding In from the Left */}
        <motion.div className="relative" variants={imageVariant}>
          <img
            src={img15}
            alt="Medical Billing Consultation Illustration"
            className="w-[350px] sm:w-[400px] md:w-[450px] mx-auto"
          />
        </motion.div>

        {/* Text Sliding In from the Right */}
        <motion.div className="m-5" variants={textVariant}>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3B5A] leading-tight">
            Code it Right
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed py-5">
            Are you tired of frequent claim denials and revenue loss? It's time to
            schedule a free consultation with our reliable internal medicine
            billing company. After assessing your practice needs, we deploy
            affluent healthcare billing solutions for all your RCM challenges.
            Unlike standard internal medicine billing companies, we use
            advanced claims scrubbing tools to eliminate errors before they hit
            the system, resulting in faster approvals, fewer denials, and
            maximum payments.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ConsultationSection;
