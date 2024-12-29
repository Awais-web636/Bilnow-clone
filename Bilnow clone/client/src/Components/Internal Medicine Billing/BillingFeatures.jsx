import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import img4 from '../../assets/img4.png';


const BillingFeatures = () => {
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
              src={img4}
              alt="Medical Billing Illustration"
              className="w-full"
            />
          </motion.div>

          {/* Content with Animation */}
          <motion.div className="text-white " variants={textVariant}>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              What Makes Our Internal
            </h2>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight my-3">
               Medicine Billing Stand Out?
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed my-8">
              Our internal medicine medical billing services are designed to
              streamline your practice's billing process. We efficiently handle both
              in-network and out-of-network claims, ensuring a high success rate,
              submitting every claim accurately, and complying with payer
              guidelines. BilNow offers diverse services, including revenue cycle
              management, medical credentialing, and billing audits. The best
              thing about our company? The multi-specialty medical billing
              services. Whether you're associated with a solo or multi-specialty
              medical practice, BilNow is your one-stop destination.
            </p>

            {/* Features List */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-[#4CC3C3] rounded-full p-1">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg">Focused Claim Handling</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-[#4CC3C3] rounded-full p-1">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg">End-to-End Process Oversight</span>
              </div>
            </div>

            {/* CTA Button */}
            <button className="mt-8 bg-[#4CC3C3] hover:bg-orange-300 hover:text-black text-white font-medium px-8 py-3 rounded-lg transition-colors duration-200">
              Schedule Demo
            </button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default BillingFeatures;
