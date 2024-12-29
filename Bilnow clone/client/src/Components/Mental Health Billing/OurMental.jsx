import React from 'react';
import { UserCheck,Shield,FileCheck,FilePlus,FileX,HandCoins, } from 'lucide-react';
import img13 from '../../assets/img13.svg';

const ProcessCard = ({ title, description, Icon }) => {
  return (
    <div>
      <div className="relative bg-white p-8 rounded-xl shadow-sm overflow-hidden transition-transform duration-200 group">
        {/* Hover Background */}
        <div className="absolute inset-0 bg-[#021a46] transform scale-0 group-hover:scale-100 origin-top-left transition-transform duration-300"></div>

        {/* Card Content */}
        <div className="relative z-10 text-start text-black group-hover:text-white transition-colors duration-200">
          <div className="flex justify-start">
            <div className="bg-[#E6F7F7] p-6 rounded-full mb-8 group-hover:bg-white transition-colors duration-200">
              <Icon className="w-8 h-8 text-[#4CC3C3] group-hover:text-[#0B1C39] transition-colors duration-200" />
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-8 text-start">{title}</h3>
          <p className="text-start leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Comprehensive = () => {
  const processes = [
    {
        icon: UserCheck,
      title: "Eligibility Verification",
      description: "Whether it's entering a patient's demographic information or verifying their insurance eligibility before processing claims, we've got you covered. We cross-check the information to eliminate the possibility of claim denials.",
    },
    {
      icon: Shield,
      title: "Claim Scrubbing",
      description: "Our urology billing experts scrub electronic claims prior to submission to insurance companies. We use advanced claims scrubbing tools to check for inconsistencies, reducing the chances of denials.",
    },
    {
      icon: FileCheck,
      title: "Denial Management",
      description: "Our denial management solutions help healthcare providers capture every penny they've lost due to claim denials. We perform a detailed root cause analysis to uncover and fix the causes of denied or partial payments.",
    },
    {
      icon: FilePlus,
      title: "Timely Filing",
      description: "We ensure all claims are filed within the insurance-specific deadlines, preventing denials due to late submissions and maintaining a healthy revenue cycle.",
    },
    {
      icon: FileX,
      title: "Compliance Monitoring",
      description: "Our team stays up-to-date with the latest healthcare regulations and billing requirements to ensure your practice remains compliant and protected.",
    },
    {
      icon: HandCoins,
      title: "Documentation Review",
      description: "We thoroughly review all medical documentation to ensure proper coding and complete information before claim submission, reducing denial risks.",
    },
  ];

  return (
    <div className="relative bg-gray-100 py-16 px-6 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3B5A] mb-4">
          Our Comprehensive Approach to Pulmonology Billing
          </h2>
          <p className="text-sm">We tackle all the challenges, from scheduling and patient intake to explaining complex Explanation of Benefits (EOBs) and</p>
          <p className='text-sm'>ensuring timely payments.</p>
        </div>

        {/* Process Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {processes.map((process, index) => (
            <ProcessCard
              key={index}
              Icon={process.icon}
              title={process.title}
              description={process.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Comprehensive;
