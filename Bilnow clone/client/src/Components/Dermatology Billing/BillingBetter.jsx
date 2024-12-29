import React from 'react';
import { motion } from 'framer-motion';
import img7 from '../../assets/img7.png';

const BillingBetter = () => {
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
                <motion.div
                    className="relative"
                    variants={imageVariant}
                >
                    <img
                        src={img7}
                        alt="Medical Billing Consultation Illustration"
                        className="w-full"
                    />
                </motion.div>

                {/* Text Sliding In from the Right */}
                <motion.div className="m-5" variants={textVariant}>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1B3B5A] leading-tight">
                        We Do Billing Better
                    </h2>
                    <p className="text-gray-700 leading-relaxed py-5">
                        We have a proven track record of working alongside top dermatology
                        practices. With years of experience and in-depth industry knowledge,
                        we deliver exceptional, affordable billing services designed to boost
                        your revenue. It all starts with a deep analysis of your current medical
                        billing system. Our team pinpoints problematic areas and provides practical
                        and actionable solutions to fix the problems and make your healthcare practice
                        more profitable.
                    </p>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default BillingBetter;
