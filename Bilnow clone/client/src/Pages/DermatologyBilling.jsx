import React from 'react'
import DermatologyBillingServices from '../Components/Dermatology Billing/DermatologyBillingServices'
import BillingBetter from '../Components/Dermatology Billing/BillingBetter'
import CodingProficiency from '../Components/Dermatology Billing/CodingProficiency'
import GetStarted from '../Components/Dermatology Billing/GetStarted'
import ChallengesSection from '../Components/Internal Medicine Billing/ChallengesSection'
import ConsultationSection from '../Components/Internal Medicine Billing/ConsultationSection'
import BillingProcess from '../Components/Internal Medicine Billing/BillingProcess'
import Header from '../Components/Home/Header'
import Conatct from '../Components/Home/Contact'
import Footer from '../Components/Home/Footer'
const DermatologyBilling = () => {
  return (
    <div className='overflow-x-hidden'>
        <Header/>
        <DermatologyBillingServices />
        <BillingBetter />
        <CodingProficiency />
        <GetStarted />
        <ChallengesSection />
        <ConsultationSection />
        <BillingProcess/>
        <Conatct/>
        <Footer/>
    </div>
  )
}

export default DermatologyBilling