import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import pulmonology from '../../assets/pulmonology-4.svg';


const BilNow = () => {
  const features = [
    'Proven revenue growth.',
    'Transparent financial insights',

  ];

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
      className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Content with Animation */}
        <motion.div className="" variants={textVariant}>

          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3B5A] leading-tight">
          What BilNow Offers To Your
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3B5A] leading-tight">
           Pulmonology Practice?
          </h2>

          <p className="text-gray-700 text-sm leading-relaxed my-3">
          With a successful legacy of working with pulmonology practices,
           we make every possible effort to deliver a significant 25-30%
           increase in practice revenue. Moreover, you can cut overhead costs
           by up to 25% without sacrificing billing quality.
          </p>

          <p className="text-gray-700 text-sm leading-relaxed">
          Our systematic procedures for handling pulmonology billing
          services eliminate the possibility of billing errors and can
          increase your claim’s first-pass acceptance ratio to 96%. The
          best thing about our partnership is transparency and freedom,
          with clear insights into your finances. Knowing where your money
          is going is not just your right—our promise.
          </p>

          {/* Features List */}
          <ul className="my-8">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3 my-2">
                <div className="flex-shrink-0">
                  <Check className="w-5 h-5 text-white  rounded-full bg-black" />
                </div>
                <span className="text-gray-400 text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Illustration with Animation */}
        <motion.div className="relative" variants={imageVariant}>
          <img
            src={pulmonology}
            alt="Medical Billing Challenges Illustration"
            className="w-full"
          />
        </motion.div>
      </div>
    </motion.div>
    </div>
  );
};

export default BilNow;
