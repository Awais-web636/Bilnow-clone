import React from 'react'
import MentalBilling from '../Components/Mental Health Billing/MentalBilling'
import SecurData from '../Components/Mental Health Billing/SecureData'
import Workflow from '../Components/Mental Health Billing/Workflow'
import Choosing from '../Components/Mental Health Billing/Choosing '
import Solutions from '../Components/Mental Health Billing/Solutions'
import Quick from '../Components/Mental Health Billing/Quick'
import OurMental from '../Components/Mental Health Billing/OurMental'
import Header from '../Components/Home/Header'
import Contact from '../Components/Home/Contact'
import Footer from '../Components/Home/Footer'
const HealthBillingSerives = () => {
  return (
    <>
    <div className='overflow-x-hidden'>
    <Header/>
    <MentalBilling />
    <SecurData />
    <Workflow />
    <Choosing />
    <Solutions />
    <Quick />
    <OurMental />
    <Contact/>
    <Footer/>
    </div>
    </>
  )
}

export default HealthBillingSerives