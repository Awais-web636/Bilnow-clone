import { MdOutlineMail, MdOutlinePhoneInTalk } from 'react-icons/md';
import Impact from './Impact';

export default function Request() {
  return (
    <div className="relative">
      <div className="relative h-[550px] w-full overflow-hidden bg-[#1DBFCC]">
        {/* Decorative curves */}
        <div className="absolute right-0 top-0 h-full w-1/3 hidden md:block">
          <div className="absolute right-0 h-full w-[2px] bg-white/20"></div>
          <div className="absolute right-20 h-full w-[2px] bg-white/20"></div>
          <div className="absolute right-40 h-full w-[2px] bg-white/20"></div>
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-20"> {/* Adjust padding */}
          <div className="text-center">
            <h1 className="mb-6 text-[28px] md:text-[35px] leading-tight text-white">
              Request Your Free Billing
              <br />
              Audit & Quote Today.
            </h1>
            <p className="mb-6 text-[14px] md:text-[16px] text-white/90">
              Top Medical Billing Company in the United States. Get a Quick Quote!
            </p>

            <div className="mx-auto max-w-md backdrop-blur p-6 rounded-lg">
              <div className="space-y-4">
                <div className="flex items-center justify-center">
                  <MdOutlineMail className="h-6 w-6 text-black" />
                  <a
                    href="mailto:info@bilnow.com"
                    className="ml-2 text-lg text-white transition-colors hover:text-white/80"
                  >
                    info@bilnow.com
                  </a>
                </div>
                <div className="flex items-center justify-center">
                  <MdOutlinePhoneInTalk className="h-6 w-6 text-black" />
                  <a
                    href="tel:7187018169"
                    className="ml-2 text-lg text-white transition-colors hover:text-white/80"
                  >
                    718 701 8169
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Adjust positioning to avoid overlap */}
      <div className="absolute left-1/2 top-[350px] transform -translate-x-1/2 md:top-[400px]"> {/* Adjusted bottom */}
        <Impact />
      </div>
    </div>
  );
}