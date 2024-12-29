import React from 'react';
import { ShieldCheck, UserCheck, AppWindowIcon, UserCog,Clock,FileText } from 'lucide-react';
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

const WeOffer = () => {
  const processes = [
    {
      icon: UserCheck,
      title: "Compliance",
      description: "We ensure your revenue cycle management is always secure and compliant.",
    },
    {
      icon: AppWindowIcon,
      title: "Regular QA Check",
      description: "Our experts regularly update dermatology billing codes, ensuring accuracy and reliability.",
    },
    {
      icon: UserCog,
      title: "Strict Data Protection",
      description: "We follow strict parameters to secure your confidential patient information.",
    },
    {
      icon: Clock,
      title: "Certified Coders",
      description: "Our certified coders have in-depth knowledge about ICD-10, HCPCS, and other coding classifications.",
    },
    {
      icon: ShieldCheck,
      title: "RCM",
      description: "We ensure effective billing that begins with patient registration & extends to payment posting.",
    },
    {
      icon: FileText,
      title: "Transparent Procedures",
      description: "Experience unparalleled transparency and clarity in your dermatology medical billing system.",
    },
  ];

  return (
    <div className="relative bg-gray-100 py-16 px-6 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3B5A] mb-4">
            Urology Billing Services We Offer
          </h2>
          <p className="text-sm">Our key urology medical billing services include:</p>
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

export default WeOffer;
