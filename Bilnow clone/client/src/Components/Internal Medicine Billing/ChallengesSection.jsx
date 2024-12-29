import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import img10 from '../../assets/img10.png';


const ChallengesSection = () => {
  const features = [
    'Precise coding.',
    'Speeds up payments.',
    'Dedicated Support.'
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
    <div className='bg-gray-200'>
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
          Connect With Diverse Dermatology Billing Experts
          </h2>


          <p className="text-gray-700 text-sm leading-relaxed my-4">
          We provide dermatology medical billing solutions for your practice
           at every step and for multiple subspecialties, including cosmetic
           dermatology, Mohs micrographic surgery, and dermatopathology. Our
           medical billing for dermatology is customized after uncovering the
           issues in your revenue cycle.
          </p>

          <p className="text-gray-700 text-sm leading-relaxed">
          Understanding the complexities of dermatology-specific procedures
          such as biopsies, excisions, and laser treatments, our experts stay
          updated with the medical billing and coding for the newly added procedures.
          So, our team ensures accurate claims, fewer denials, and faster reimbursements
           while staying compliant with the latest regulations.
          </p>

          {/* Features List */}
          <ul className="my-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2 my-2 text-sm">
                <div className="flex-shrink-0">
                  <Check className="w-4 h-4 text-white hover:bg-orange-300 rounded-full bg-black" />
                </div>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Illustration with Animation */}
        <motion.div className="relative" variants={imageVariant}>
          <img
            src={img10}
            alt="Medical Billing Challenges Illustration"
            className="w-full"
          />
        </motion.div>
      </div>
    </motion.div>
    </div>
  );
};

export default ChallengesSection;