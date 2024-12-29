import React from 'react';
import { motion } from 'framer-motion';
import mentalhealth5 from '../../assets/mental-health5.svg';

const Quick = () => {
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
            className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 flex flex-col items-center justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className="grid md:grid-cols-2  items-center text-center md:text-left">
                {/* Image Sliding In from the Left */}
                <motion.div className="flex justify-center" variants={imageVariant}>
                    <img
                        src={mentalhealth5}
                        alt="Medical Billing Consultation Illustration"
                        className="w-[300px] md:w-[400px]"
                    />
                </motion.div>

                {/* Text Sliding In from the Right */}
                <motion.div className="m-5" variants={textVariant}>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1B3B5A] leading-tight ">
                        Quick Turnaround
                    </h2>
                    <p className="text-gray-700 text-sm leading-relaxed py-5">
                    Our streamlined behavioral and mental health billing services
                    ensure timely and accurate billing. We plan each step, minimizing
                     delays and reducing risks. With a strong resource pool, we efficiently
                      manage high-volume workloads and quickly meet deadlines. Whether filing
                       medical claims for the first time or appealing denied claims, we always
                        stay vigilant of the time frames set by the insurance companies to
                        ensure the maximum reimbursements without waiting for weeks and months.
                    </p>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Quick;
