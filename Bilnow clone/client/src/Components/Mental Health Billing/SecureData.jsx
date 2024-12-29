import React from 'react';
import { motion } from 'framer-motion';
import mh1 from '../../assets/mh1.svg';

const SecurData = () => {
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
            <div className="grid md:grid-cols-2 gap-12 items-center justify-center text-center md:text-left">
                {/* Image Sliding In from the Left */}
                <motion.div
                    className="flex justify-center"
                    variants={imageVariant}
                >
                    <img
                        src={mh1}
                        alt="Medical Billing Consultation Illustration"
                        className="w-[400px] md:w-[500px]"
                    />
                </motion.div>

                {/* Text Sliding In from the Right */}
                <motion.div className="m-5" variants={textVariant}>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1B3B5A] leading-tight">
                    Secure Data Handling for
                    </h2>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1B3B5A] leading-tight mb-4">
                    Mental Health Billing
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                    Our mental health billing company prioritizes data
                    security. We use secure servers to download patient
                    records and exclusively use FTP to transfer files,
                    ensuring they are encrypted with passwords accessible
                    only upon authentication. Additionally, our team monitors
                    employee login and logout times and conducts regular security
                    audits. These measures help maintain the integrity and confidentiality
                     of all records, ensuring that our billing services for mental health
                     remain secure and reliable. Protecting sensitive information is at the
                     core of our operations.
                    </p>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default SecurData;
