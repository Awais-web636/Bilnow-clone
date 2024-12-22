import React from 'react';
import Header from '../Components/Header';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';
import Termsbg from '../assets/Termsbg.jpg';

const Terms = () => {

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        {/* Header Banner */}
        <div className="relative h-[420px] flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: `url(${Termsbg})` }}>
          {/* Dark blue overlay */}
          <div className="absolute inset-0 bg-blue-900 opacity-50"></div>
          <h1 className="relative text-[2.5rem] text-white z-10">Terms & Condition</h1>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <section className="mb-8">
            <h2 className="text-[2rem] font-semibold mb-4">Legal Information</h2>
            <p className="text-[#000000] mb-4 text-[1rem]">
              Before using this website or any of the downloads or content on it, carefully read these terms and conditions of use. You indicate that you agree to these terms and conditions of use by accessing this website or any of its contents. Please do not use this website or any of its services, downloads, or material if you do not agree to all of these terms and conditions of use. By accessing or using our services, you agree to be bound by these terms. Please read them carefully before proceeding.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-[2rem] font-semibold mb-4">General</h2>
            <p className="text-[#000000] mb-4 text-[1rem]">
              As long as you have read our Terms and Conditions of Use, accepted them, and feel comfortable using our website, BILNOW extends its welcome to you. We invite you to use our EHR at no cost to you. If you’re already a client, you can utilize our EHR and HIPAA-Portal to manage your papers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-[2rem] font-semibold mb-4">Connection to other Agreements</h2>
            <p className="text-[#000000] mb-4 text-[1rem]">
              In the event that there is a direct disagreement between the terms and conditions and any other agreements you may have signed with BILNOW, the terms and conditions of such agreements will take precedence. You must, however, abide by the terms and conditions found at www.BILNOW.com if they do not expressly contradict with the terms and conditions of another agreement you have with BILNOW.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-[2rem] font-semibold mb-4">Limitation of Responsibility</h2>
            <p className="text-[#000000] mb-4 text-[1rem]">
              It is expressly understood and agreed upon by you that BILNOW and its partners, employees, affiliates, and licensors will not be held responsible for any incidental, consequential, indirect, or other damages that arise from:
            </p>
            <ul className="list-disc list-inside text-[#000000] text-[1rem] space-y-2">
              <li>We are not responsible for any third-party content or services</li>
              <li>Our liability is limited as permitted by law</li>
              <li>We do not guarantee uninterrupted service</li>
              <li>Users are responsible for maintaining their account security</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-[2rem] font-semibold mb-4">Trademarks</h2>
            <p className="text-[#000000] mb-4 text-[1rem]">
              The names of its products, services, and logo are trademarks of BIL NOW. You consent to get permission from BILNOW before displaying or using any BILNOW marks. Nothing on www.BILNOW.com should be considered a given.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-[2rem] font-semibold mb-4">Third-Party Links</h2>
            <p className="text-[#000000] mb-4 text-[1rem]">
              Links to external websites or resources may be found on BILNOW. These links and related information are not under our control. You understand that BILNOW has no duty or responsibility for any products, advertisements, content, or other materials available on such websites, nor is it responsible for the availability of such links. Furthermore, BILNOW disclaims all liability for any harm or loss brought about by those third-party connections on any such website or resource.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-[2rem] font-semibold mb-4">Entire Agreement</h2>
            <p className="text-[#000000] mb-4 text-[1rem]">
              BILNOW reserves the right to adjust its terms and conditions at any time, and your continued use of www.BILNOW.com constitutes your agreement to any such changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-[2rem] font-semibold mb-4">Indemnification</h2>
            <p className="text-[#000000] mb-4 text-[1rem]">
              As a result of your breach of the terms and conditions, you undertake to defend BILNOW, its officers, employees, and licensors against all claims, liabilities, and settlements, including reasonable legal and accounting fees.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-[2rem] font-semibold mb-4">Choice of Law and Forum</h2>
            <p className="text-[#000000] mb-4 text-[1rem]">
              The King High Court’s legislation will be used to enforce these terms and conditions. The parties hereby irrevocably agree that the Superior Court of the new high court will be the only venue for any action taken to enforce a provision of the terms and conditions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-[2rem] font-semibold mb-4">License and Rights Relative to Use of BUKOW Services</h2>
            <p className="text-[#000000] mb-4 text-[1rem]">
              We grant you a limited, non-exclusive, non-transferable license to access and use our services in accordance with these terms. This license may be revoked at any time for violations of these terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-[2rem] font-semibold mb-4">Law of Limitations</h2>
            <p className="text-[#000000] mb-4 text-[1rem]">
              You acknowledge and agree that any claim or cause of action arising out of or related to your use of www.BILNOW.com or these terms and conditions must be brought within a year of the emergence of such claim or cause of action, notwithstanding any statute or law to the contrary. The request or cause of action will be permanently barred if such a declaration or cause of action is not submitted within the allotted year.
            </p>
          </section>
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
};

export default Terms;