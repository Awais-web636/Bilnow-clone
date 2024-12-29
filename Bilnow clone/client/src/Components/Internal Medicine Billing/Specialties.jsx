import React from 'react'
import InternalMedicien from './InternalMedicien'
import ConsultationSection from './ConsultationSection'
import FinancialBenefits from './ FinancialBenefits'
import BillingFeatures from './BillingFeatures'
import ChallengesSection from './ChallengesSection'
import BillingProcess from './BillingProcess'

const Specialties = () => {
  return (
    <div>
    <>
    <InternalMedicien />
    <ConsultationSection />
    <FinancialBenefits/>
    <BillingFeatures />
    <ChallengesSection />
    <BillingProcess />
    </>
    </div>
  )
}

export default Specialties