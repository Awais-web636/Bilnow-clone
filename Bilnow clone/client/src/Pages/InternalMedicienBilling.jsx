import React from 'react'
import InternalMedicien from '../Components/Internal Medicine Billing/InternalMedicien'
import ConsultationSection from '../Components/Internal Medicine Billing/ConsultationSection'
import ChallengesSection from '../Components/Internal Medicine Billing/ChallengesSection'
import BillingProcess from '../Components/Internal Medicine Billing/BillingProcess'
import BillingFeatures from '../Components/Internal Medicine Billing/BillingFeatures'
import FinancialBenefits from '../Components/Internal Medicine Billing/FinancialBenefits'
import Header from "../Components/Home/Header"
import Conatct from "../Components/Home/Contact"
import Footer from "../Components/Home/Footer"
const InternalMedicienBilling = () => {
  return (
    <>
    <div className='overflow-x-hidden'>
    <Header/>
     <InternalMedicien />
     <ConsultationSection />
     <FinancialBenefits />
     <BillingFeatures />
     <ChallengesSection />
     <BillingProcess />
     <Conatct/>
     <Footer/>
     </div>
    </>
  )
}

export default InternalMedicienBilling