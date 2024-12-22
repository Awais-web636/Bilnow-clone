import { FiPhoneCall } from 'react-icons/fi'; // Make sure to import the correct icon

export default function ContactSection() {
  return (
    <div className="w-full bg-[#26c6da] py-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-white mb-4 md:mb-0">
            <h2 className="text-xl md:text-2xl font-bold mb-2">
              Schedule a free{" "}
              <a
                href="/demo"
                className="underline hover:text-white/90 transition-colors"
              >
                Demo
              </a>
            </h2>
            <p className="text-sm md:text-base">
              A member of our team will get in touch with you in 12 hours.
            </p>
          </div>

          <div className="flex items-center gap-4 text-white">
            <div className="bg-white/20 border border-white rounded-full p-3 md:p-4">
              <FiPhoneCall className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <div>
              <div className="text-xs md:text-sm font-medium">CALL US AT</div>
              <a
                href="tel:7187018169"
                className="text-sm md:text-lg font-bold hover:text-white/90 transition-colors"
              >
                718 701 8169
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}