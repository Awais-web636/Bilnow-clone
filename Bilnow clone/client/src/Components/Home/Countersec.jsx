import React from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { FaBullseye, FaFileAlt, FaDollarSign, FaChartLine } from 'react-icons/fa';

const StatsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.2, // Start the animation when 20% of the section is visible
  });

  const stats = [
    { value: 99, label: 'First Pass Rate', icon: <FaBullseye /> },
    { value: 98, label: 'Accuracy', icon: <FaFileAlt /> },
    { value: 25, label: 'Cost Reduction', icon: <FaDollarSign /> },
    { value: 30, label: 'Revenue Increase', icon: <FaChartLine /> },
  ];

  return (
    <div ref={ref} className="bg-[#FFFFFF] py-16 px-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center relative flex flex-col items-center">
              <div className="text-4xl mb-3 text-[#40B9B3]">{stat.icon}</div>
              <h3 className="text-4xl  text-gray-800 mb-3">
                {inView ? <CountUp start={0} end={stat.value} duration={2} /> : '0'}%
              </h3>
              <p className="text-lg text-gray-700">{stat.label}</p>
              {index < stats.length - 1 && (
                <div className="absolute right-0 top-0 h-full w-[4px] bg-[#FFC567] hidden md:block"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;