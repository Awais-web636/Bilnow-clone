import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import img24 from '../../assets/img24.svg';


const GetCredentialed = () => {
  const features = [
    'Seamless Verification.',
    'Tailored Credentialing Support',

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
          Get Credentialed with Ease
          </h2>

          <p className="text-gray-700 text-sm leading-relaxed my-3">
          Do you need help managing the complexities of urology credentialing?
           The qualification verification and skills of urologists are undoubtedly
           complicated and require expertise. But you don’t need to worry about it.
          </p>

          <p className="text-gray-700 text-sm leading-relaxed">
          We offer complete services for urologist credentialing.
           Our experts will handle each step, from filling out the
           initial application to keeping it valid and updated. We
           help urologists comply with American Board of Urology (ABU)#021a46
            requirements and the American Urological Association (AUA).
             So, let us handle your medical credentialing and practice
             your specialty in various settings, such as hospitals, clinics,
              and other facilities.
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
            src={img24}
            alt="Medical Billing Challenges Illustration"
            className="w-full"
          />
        </motion.div>
      </div>
    </motion.div>
    </div>
  );
};

export default GetCredentialed;
