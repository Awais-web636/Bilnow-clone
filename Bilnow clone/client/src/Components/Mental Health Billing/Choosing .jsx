import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import img9 from '../../assets/img9.png';


const GetStarted = () => {
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
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Illustration with Animation */}
                    <motion.div className="relative" variants={imageVariant}>
                        <img
                            src={img9}
                            alt="Medical Billing Illustration"
                            className="w-full"
                        />
                    </motion.div>

                    {/* Content with Animation */}
                    <motion.div className="text-white " variants={textVariant}>
                        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                        Benefits of Choosing BilNow
                        </h2>
                        <p className="text-gray-300 text-sm leading-relaxed my-8">
                        BilNow sets the standard for medical billing services, offering
                        tailored solutions to healthcare providers. By partnering with us,
                         you eliminate the need for in-house billing staff, reduce operational
                         costs, and free up resources for patient care. Our end-to-end approach
                         ensures seamless revenue cycle management, from patient intake to payment
                          collection, while reducing denials, enhancing transparency, and ensuring
                           compliance with evolving industry regulations.
                        </p>
                        <p className='text-gray-300 text-sm leading-relaxed my-8'>
                        Outsourcing to BilNow also ensures access to specialized billing
                        experts, faster reimbursements, and improved cash flow without the
                        hassle of managing internal billing teams.
                        </p>

                        {/* Features List */}
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <div className="bg-[#4CC3C3] rounded-full p-1 ">
                                    <Check className="w-3 h-3 text-white" />
                                </div>
                                <span className="text-sm">Faster Reimbursements</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="bg-[#4CC3C3] rounded-full p-1">
                                    <Check className="w-3 h-3 text-white" />
                                </div>
                                <span className="text-sm">Cost Efficiency</span>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <button className="mt-8 bg-[#4CC3C3] hover:bg-orange-300 hover:text-black text-white text-sm px-8 py-3 rounded-lg transition-colors duration-200">
                            Request Demo
                        </button>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default GetStarted;