import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import img23 from '../../assets/img23.svg';

const SpecificBilling = () => {
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
                            src={img23}
                            alt="Medical Billing Illustration"
                            className="w-[350px] sm:w-[400px] md:w-[400px] mx-auto"
                        />
                    </motion.div>

                    {/* Content with Animation */}
                    <motion.div className="text-white" variants={textVariant}>
                        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                        Urology-Specific Billing &
                        </h2>
                        <h2 className="text-3xl md:text-4xl font-bold leading-tight my-3">
                            Coding
                        </h2>

                        <p className="text-gray-300 text-sm leading-relaxed my-4">
                        As a multi-specialty medical billing company, we handle every aspect
                        of urology medical billing services. We have experts managing medical
                         billing for urology-specific procedures, including urologic oncology,
                         renal transplantation, male infertility, female urology, neuro-urology,
                         pediatric urology, and calculi. Medical coding experts at BilNow have
                         in-depth knowledge of all updated medical codes and follow the latest
                         CPT and ICD-10 standards for diagnosis and procedure reporting. Whether
                         applying complicated codes for benign prostatic hyperplasia, extracorporeal
                          shock wave therapy, or applying correct modifiers, our coders can easily
                          handle any urology code.
                        </p>
                        <p className="text-gray-300 text-sm leading-relaxed my-8">
                        So, let our certified coders and billers handle your urology billing services and witness the fast and clean medical claims submission, denial resolution, and practice improvement.
                        </p>

                        {/* Features List */}
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <div className="bg-[#4CC3C3] rounded-full p-1">
                                    <Check className="w-3 h-3 text-white" />
                                </div>
                                <span className="text-sm">
                                Save your practice from penalties.
                                </span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="bg-[#4CC3C3] rounded-full p-1">
                                    <Check className="w-3 h-3 text-white" />
                                </div>
                                <span className="text-sm">More revenue collection</span>
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

export default SpecificBilling;
