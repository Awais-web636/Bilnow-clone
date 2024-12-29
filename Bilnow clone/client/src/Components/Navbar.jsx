import { useState, useEffect } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`bg-[#fffefe] text-blue-900 shadow fixed z-10 left-0 right-0 mx-auto w-[1137px] h-[80px] transition-all duration-500 ${
        isScrolled ? 'top-0' : 'top-[100px]'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-3 px-2 lg:px-10">
        {/* Nav Links */}
        <ul className="flex space-x-10">
          {['home', 'about'].map((item) => (
            <li key={item}>
              <a href={`#${item}`} className="relative group">
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <span className="block h-[2px] bg-teal-500 absolute left-0 right-0 bottom-[-5px] scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </a>
            </li>
          ))}
          <li className="group relative">
            <div className="flex items-center">
              <a href="#services" className="hover:text-teal-500 flex items-center relative group">
                Services
                <IoIosArrowDown className="ml-1" />
                <span className="block h-[2px] bg-teal-500 absolute left-0 right-0 bottom-[-5px] scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </a>
            </div>
            {/* Dropdown */}
            <ul className="absolute hidden group-hover:block bg-white shadow-md text-sm text-blue-900 mt-2 space-y-1 p-2">
              <li>
                <a href="#service1" className="block px-4 py-1 hover:text-[#FFC567]">
                  Service 1
                </a>
              </li>
              <li>
                <a href="#service2" className="block px-4 py-1 hover:text-[#FFC567]">
                  Service 2
                </a>
              </li>
            </ul>
          </li>
          <li className="group relative">
            <div className="flex items-center">
              <a href="#specialties" className="hover:text-teal-500 flex items-center relative group">
                Specialties
                <IoIosArrowDown className="ml-1" />
                <span className="block h-[2px] bg-teal-500 absolute left-0 right-0 bottom-[-5px] scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </a>
            </div>
            {/* Dropdown */}
            <ul className="absolute hidden group-hover:block bg-white shadow-md text-sm text-blue-900 mt-2 space-y-1 p-2">
              <li>
                <a href="#specialty1" className="block px-4 py-1 hover:text-[#FFC567]">
                  Specialty 1
                </a>
              </li>
              <li>
                <a href="#specialty2" className="block px-4 py-1 hover:text-[#FFC567]">
                  Specialty 2
                </a>
              </li>

            </ul>
          </li>
          {['blogs', 'contact'].map((item) => (
            <li key={item}>
              <a href={`#${item}`} className="relative group">
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <span className="block h-[2px] bg-teal-500 absolute left-0 right-0 bottom-[-5px] scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Request Demo Button */}
        <a
          href="#request-demo"
          className="relative bg-teal-500 text-white px-6 py-2 rounded transition-transform duration-300 ease-in-out hover:bg-teal-600 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring focus:ring-teal-300"
        >
          <span className="absolute inset-0 bg-teal-400 opacity-0 transition-opacity duration-300 rounded hover:opacity-20"></span>
          Request Demo
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
