import { ShieldCheck } from 'lucide-react';
import img13 from '../../assets/img13.svg';

const ProcessCard = ({ title, description }) => {
  return (
    <div>
      <div className="relative bg-white p-8 rounded-xl shadow-sm overflow-hidden transition-transform duration-200 group">
        {/* Hover Background */}
        <div className="absolute inset-0 bg-[#021a46] transform scale-0 group-hover:scale-100 origin-top-left transition-transform duration-300"></div>

        {/* Card Content */}
        <div className="relative z-10 text-start text-black group-hover:text-white transition-colors   duration-200">
          <div className="flex justify-start">
            <div className="bg-[#E6F7F7] p-6 rounded-full mb-8 group-hover:bg-white transition-colors duration-200">
              <ShieldCheck className="w-8 h-8 text-[#4CC3C3] group-hover:text-[#0B1C39] transition-colors duration-200" />
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-8 text-start">{title}</h3>
          <p className="text-start leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

const BillingProcess = () => {
  const processes = [
    {
      title: "Requirement Analysis",
      description:
        "Thoroughly examine the client's organizational requirements, ensuring all specifications are clearly understood and documented."
    },
    {
      title: "Record Gathering",
      description:
        "Securely receive medical billing records from the client through a compliant and encrypted channel for data protection."
    },
    {
      title: "Record Indexing",
      description:
        "Organize and sort medical billing records accurately based on the client's unique categorization preferences."
    },
    {
      title: "Validation",
      description:
        "Carefully review each received record to confirm accuracy and compliance with billing standards and requirements."
    },
    {
      title: "Claim Submission",
      description:
        "Confirm and input all claims into the billing software for processing, ensuring completeness and accuracy."
    },
    {
      title: "Analytical Reports",
      description:
        "Generate comprehensive final reports and securely deliver them to the client, meeting all agreed-upon timelines."
    }
  ];

  return (
    <div className="relative bg-gray-100 py-16 px-6 sm:px-6 lg:px-8">

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3B5A] mb-4">
          Comprehensive Nephrology Billing Solutions
          </h2>

        </div>

        {/* Process Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {processes.map((process, index) => (
            <ProcessCard
              key={index}
              title={process.title}
              description={process.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BillingProcess;
