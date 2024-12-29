import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import mentalhealth4 from '../../assets/mental-health4.svg';


const Solutions = () => {
  const features = [
    'Easy Patient Scheduling.',
    'Restrict unauthorized access to health data.',
    'Improve the communication between patients and practitioners.'
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
          Scalable EHR Solutions for
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3B5A] leading-tight">
          Better Patient Care & Billing
          </h2>

          <p className="text-gray-700 text-sm leading-relaxed my-4">
          Our scalable EHR solutions are designed to optimize patient care.
           We ensure a smooth workflow by integrating patient records, medical
           history, and billing information into one comprehensive platform.
            Additionally, the updated data helps medical coders extract accurate
            information about patients’ diagnoses, symptoms, treatment, medical
             services, and procedures, enabling them to assign precise medical
             codes. That leads to correct billing and reduces the chances of claims
             denials. As a result, healthcare providers get paid faster for the
             medical care services provided to the patients.
          </p>

          <p className="text-gray-700 text-sm leading-relaxed">
          Our system adapts to your growing needs, providing enhanced
          data security, real-time access to patient information, and
          seamless collaboration between departments for improved workflow
           and behavioral health billing services.
          </p>

          {/* Features List */}
          <ul className="my-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2 my-2 text-sm">
                <div className="flex-shrink-0">
                  <Check className="w-4 h-4 text-white  rounded-full bg-orange-300" />
                </div>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Illustration with Animation */}
        <motion.div className="relative" variants={imageVariant}>
          <img
            src={mentalhealth4}
            alt="Medical Billing Challenges Illustration"
            className="w-full"
          />
        </motion.div>
      </div>
    </motion.div>
    </div>
  );
};

export default Solutions;