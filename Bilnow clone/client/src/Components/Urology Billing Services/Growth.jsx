import React from 'react';
import { motion } from 'framer-motion';
import img22 from '../../assets/img22.svg';

const Growth = () => {
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
          <motion.div className="space-y- p-12" variants={textVariant}>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3B5A] leading-tight">
            Partnering for the Growth &
            </h2>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3B5A] leading-tight">
            Success of Your Urology
            </h2>
            <h2 className="text-3xl md:text-4xl mb-5 font-bold text-[#1B3B5A] leading-tight">
            Practice
            </h2>
            <p className="text-gray-700 text-sm  leading-relaxed">
            We strongly believe in strategic partnerships. We’re more
             than just a service provider—we’re invested in the success
             and growth of your urology practice. We work closely with your
             team to assess your needs and customize urology billing solutions
              accordingly. Our commitment to your success goes beyond the basics,
               focusing on long-term growth, efficiency, and a trusted, collaborative
                relationship. Further, we keep the communication honest and open. With
                regular reports and open channels, you’re never in the dark about your
                practice’s financial standing.
            </p>

          </motion.div>

          {/* Image Section with Animation */}
          <motion.div
            className="flex justify-center items-center"
            variants={imageVariant}
          >
            <img
              src={img22}
              alt="Financial Benefits Illustration"
              className="w-[300px] sm:w-[350px] md:w-[400px] mx-auto"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Growth;
