import React from 'react';
import Header from '../Components/Header';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';
import Security from '../assets/securitybg.jpg';

const Privacy = () => {
  return (
    <>
      <Header />
      <div className="relative h-[300px] w-full flex items-center justify-center">
        {/* Header */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${Security})` }}
        >
          {/* Dark blue overlay */}
          <div className="absolute inset-0 bg-blue-900/80"></div>
        </div>

        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <h1 className="text-white text-[2.5rem] text-center">Privacy Policy</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <section className="mb-8">
          <h2 className="text-[2rem] font-semibold mb-4">Who we are</h2>
          <p className="text-[#000000] mb-2 text-[1rem]">Our website address is: https://Billnow.com</p>
        </section>

        <section className="mb-8">
          <h2 className="text-[2rem] font-semibold mb-4">Comments</h2>
          <p className="text-[#000000] mb-4 text-[1rem]">
            When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor's IP address and browser user agent string to help spam detection.
          </p>
          <p className="text-[#000000] mb-4 text-[1rem]">
            An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here: https://automattic.com/privacy/. After approval of your comment, your profile picture is visible to the public in the context of your comment.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-[2rem] font-semibold mb-4">Media</h2>
          <p className="text-[#000000] mb-4 text-[1rem]">
            If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-[2rem] font-semibold mb-4">Cookies</h2>
          <p className="text-[#000000] mb-4 text-[1rem]">
            If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment.
          </p>
          <p className="text-[#000000] mb-4 text-[1rem]">
            If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.
          </p>
          <p className="text-[#000000] mb-4 text-[1rem]">
            When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-[2rem] font-semibold mb-4">Embedded content from other websites</h2>
          <p className="text-[#000000] mb-4 text-[1rem]">
            Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-[2rem] font-semibold mb-4">Who we share your data with</h2>
          <p className="text-[#000000] mb-4 text-[1rem]">
            If you request a password reset, your IP address will be included in the reset email.
          </p>
        </section>

        <section className="mb-8">
          <h2 className ="text-[2rem] font-semibold mb-4">How long we retain your data</h2>
          <p className="text-[#000000] mb-4 text-[1rem]">
            If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue.
          </p>
          <p className="text-[#000000] mb-4 text-[1rem]">
            For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-[2rem] font-semibold mb-4">What rights you have over your data</h2>
          <p className="text-[#000000] mb-4 text-[1rem]">
            If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-[2rem] font-semibold mb-4">Where your data is sent</h2>
          <p className="text-[#000000] mb-4 text-[1rem]">
            Visitor comments may be checked through an automated spam detection service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-[2rem] font-semibold mb-4">SMS Consent</h2>
          <p className="text-[#000000] mb-4 text-[1rem]">
            BilNow LLC occasionally sends SMS updates specifically related to Medical Billing Services. This may include promotional offers, service updates, and other information. Message frequency may vary, and standard message and data rates may apply. By checking the box on BilNow LLC website, you acknowledge that you have read and agree to BilNow LLC Privacy Policy and Terms of Service. To stop receiving messages, reply “STOP”. For Help, reply “HELP” or contact us at 718-701-8169. The SMS consent and phone number provided will never be sold, shared or disclosed to any third party for marketing purposes whatsoever. It will only be used by BilNow for necessary communication as mentioned above.
          </p>
        </section>
      </div>
      <Contact />
      <Footer />
    </>
  );
};

export default Privacy;