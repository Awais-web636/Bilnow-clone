import React from 'react';
import { motion } from 'framer-motion';
import mentalhealth2 from '../../assets/mental-health2.svg';



const Workflow = () => {
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
        <div className='bg-gray-100'>
            <motion.div
                className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 "
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Text Section with Animation */}
                    <motion.div className="" variants={textVariant}>
                        <h2 className="text-xl md:text-4xl font-bold text-[#1B3B5A] leading-tight">
                        Hire Professionals That Adapt
                        </h2>
                        <h2 className="text-xl md:text-4xl font-bold mb-6 text-[#1B3B5A] leading-tight">
                        to Your Workflow
                        </h2>
                        <p className="text-gray-700  leading-relaxed">
                        Are you worried about whether the outsourcing team’s
                        flexibility will adapt to your workflow? No worries—BilNow
                        has a solution for this problem. We’ve partnered with some
                        of the best healthcare practices and provided the best possible
                        financial results, making BilNow a prominent behavioral health
                        billing company in the United States. We work as an extension of
                         your team, ensuring smooth day-to-day operations. We integrate
                         mental health billing solutions powered by advanced technology
                         into your existing system to enhance performance and eliminate
                          the hassle of implementing entirely new processes.
                        </p>
                    </motion.div>
                    {/* Image Section with Animation */}
                    <motion.div className="flex justify-center" variants={imageVariant}>
                        <img
                            src={mentalhealth2}
                            alt="Financial Benefits Illustration"
                            className="w-[350px] md:w-[500px]"
                        />
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default Workflow;