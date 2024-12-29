import React from 'react'
import BillingPartner from '../Components/Urology Billing Services/BillingPartner'
import TechnologyBilling from '../Components/Urology Billing Services/TechnologyBilling'
import Growth from '../Components/Urology Billing Services/Growth'
import SpecificBilling from '../Components/Urology Billing Services/SpecificBilling'
import GetCredentialed from '../Components/Urology Billing Services/GetCredentialed'
import QualityCheck from '../Components/Urology Billing Services/QualityChecks'
import WeOffer from '../Components/Urology Billing Services/QualityChecks'
import Header from '../Components/Home/Header'
import Contact from '../Components/Home/Contact'
import Footer from '../Components/Home/Footer'
const UrologyBillingServices = () => {
  return (
    <>
    <div className='overflow-x-hidden'>
    <Header/>
    <BillingPartner />
    <TechnologyBilling />
    <Growth />
    <SpecificBilling />
    <GetCredentialed />
    <QualityCheck />
    <WeOffer />
    <Contact/>
    <Footer/>
    </div>
    </>
  )
}

export default UrologyBillingServices