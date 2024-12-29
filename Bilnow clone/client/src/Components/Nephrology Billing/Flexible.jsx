import React from 'react';
import { motion } from 'framer-motion';
import img19 from '../../assets/img19.png';

const Flexible = () => {
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
            src={img19}
            alt="Medical Billing Consultation Illustration"
            className="w-[350px] sm:w-[400px] md:w-[450px] mx-auto"
          />
        </motion.div>

        {/* Text Sliding In from the Right */}
        <motion.div className="m-5" variants={textVariant}>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3B5A] leading-tight">
          Flexible with Your Practice
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed py-5">
          Our scalable nephrology billing solutions ensure complete flexibility
          in every part of your medical practice. From practice management software
           that fits your unique needs to custom growth strategies, we give you control.
            Whether simplifying billing, enhancing patient communication, or expanding your
             operations, our flexible medical billing solutions provide the tools you need at
              every stage. You focus on delivering top-notch care while we handle the rest, keeping
              your practice efficient and adaptable.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Flexible;
