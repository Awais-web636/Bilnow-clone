import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import pulmonology from '../../assets/pulmonology-3.svg';

const Pulmonology = () => {
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
                            src={pulmonology}
                            alt="Medical Billing Illustration"
                            className="w-[350px] sm:w-[400px] md:w-[400px] mx-auto"
                        />
                    </motion.div>

                    {/* Content with Animation */}
                    <motion.div className="text-white" variants={textVariant}>
                        <h2 className="text-3xl md:text-4xl font-bold leading-tight">

                        Specialty-specific Coding for
                        </h2>
                        <h2 className="text-3xl md:text-4xl font-bold leading-tight my-3">
                        Pulmonology Procedures
                        </h2>

                        <p className="text-gray-300 text-sm leading-relaxed my-4">
                        Pulmonology medical coding and billing is quite complicated and
                         challenging due to the ever-evolving guidelines and industry
                         regulations. Moreover, coding limitations for certain pulmonary
                         procedures, like the inability to bill for CPT code 94640 (Pressurized
                          or non-pressurized inhalation treatment for acute airway obstruction)
                          and 94644 (Continuous inhalation treatment with aerosol medication for
                          acute airway obstruction), make pulmonology medical billing more complicated
                          as compared to other medical specialties. Such restrictions and limitations
                          highlight the importance of specialized knowledge and expertise in CPT and ICD-10 coding for pulmonology procedures. This is what BilNow promises.
                        </p>
                        <p className="text-gray-300 text-sm leading-relaxed my-8">
                        We have an expert team of certified billers and coders, ensuring
                        that your practice remains compliant and secures the maximum
                        reimbursement for the healthcare services provided to the patients.
                        Let us handle your revenue cycle and get peace of mind–knowing your
                        billing process is in the hands of professionals who are not just familiar
                         with the rules but are adept at applying them to benefit your practice.
                        </p>

                        {/* Features List */}
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <div className="bg-[#4CC3C3] rounded-full p-1">
                                    <Check className="w-3 h-3 text-white" />
                                </div>
                                <span className="text-sm">
                                Expert pulmonology coders
                                </span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="bg-[#4CC3C3] rounded-full p-1">
                                    <Check className="w-3 h-3 text-white" />
                                </div>
                                <span className="text-sm">Maximized reimbursement compliance</span>
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

export default Pulmonology;
