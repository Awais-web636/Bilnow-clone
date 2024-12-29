import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import img18 from '../../assets/img18.png';


const EthicalBilling = () => {
  const features = [
    'Build trust with patients.',
    'Ensures legal compliance.',
    'Maximize reimbursements.'
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
          Ethical Billing Practices
          </h2>

          <p className="text-gray-700 text-sm leading-relaxed my-3">
          We prioritize transparent and ethical billing practices, ensuring
          that your nephrology practice maintains its integrity while delivering
          reliable and trustworthy nephrology billing services
          </p>

          <p className="text-gray-700 text-sm leading-relaxed">
          Further, to keep the coding and billing error-free, our
           team stays current with changing billing regulations,
           ensuring your nephrology coding and billing adhere to
           the latest CMS guidelines and healthcare laws and compliance
            and accuracy at all times.
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
            src={img18}
            alt="Medical Billing Challenges Illustration"
            className="w-full"
          />
        </motion.div>
      </div>
    </motion.div>
    </div>
  );
};

export default EthicalBilling;
