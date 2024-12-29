import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import img17 from '../../assets/img17.png';

const AddingValue = () => {
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
            className="bg-[#0B1C39] min-h-[600px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Illustration with Animation */}
                    <motion.div
                        className="relative flex justify-center items-center"
                        variants={imageVariant}
                    >
                        <img
                            src={img17}
                            alt="Medical Billing Illustration"
                            className="w-[350px] sm:w-[400px] md:w-[400px] mx-auto"
                        />
                    </motion.div>

                    {/* Content with Animation */}
                    <motion.div className="text-white" variants={textVariant}>
                        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                            Adding Value to Your
                        </h2>
                        <h2 className="text-3xl md:text-4xl  leading-tight my-3">
                            Nephrology Billing Process
                        </h2>

                        <p className="text-gray-300 text-sm leading-relaxed my-4">
                            We bring top-tier technology and expertise to nephrology practices
                            of all sizes. Our experienced team handles your entire billing
                            process—from generating and submitting claims to proactive follow-ups,
                            managing denials, handling appeals, posting payments, and delivering
                            detailed reports. Our nephrology billing services can help boost your
                            revenue by 10-15% and speed up payment times by 35%. The best thing
                            about partnering with us is saving the time and overhead costs of
                            running an in-house billing team.
                        </p>
                        <p className="text-gray-300 text-sm leading-relaxed my-8">
                            Whether you’re a multispecialty group or a solo practice, you don’t
                            need to worry about billing inefficiencies. Our nephrology medical
                            billing services are designed for practices of all sizes while
                            streamlining your billing and capturing lost revenue.
                        </p>

                        {/* Features List */}
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <div className="bg-[#4CC3C3] rounded-full p-1">
                                    <Check className="w-3 h-3 text-white" />
                                </div>
                                <span className="text-sm">
                                    Reduce claim denial rates by 25%
                                </span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="bg-[#4CC3C3] rounded-full p-1">
                                    <Check className="w-3 h-3 text-white" />
                                </div>
                                <span className="text-sm">Reduce overhead costs by 35%</span>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <button className="mt-8 bg-[#4CC3C3] hover:bg-orange-300 hover:text-black text-white text-xs font-medium px-8 py-3 rounded-lg transition-colors duration-200">
                            Schedule Demo
                        </button>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default AddingValue;
