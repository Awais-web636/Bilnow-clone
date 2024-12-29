import React from 'react'
import Pulmonology from '../Components/Pulmonology Billing/Pulmonology'
import Accelerate from '../Components/Pulmonology Billing/Accelerate'
import ReduceBilling from '../Components/Pulmonology Billing/ReduceBilling'
import BilNow from '../Components/Pulmonology Billing/BilNow'
import Managing from '../Components/Pulmonology Billing/Managing'
import Comprehensive from '../Components/Pulmonology Billing/Comprehensive '
import BillingSerives from '../Components/Pulmonology Billing/BillingSerives'
import Header from '../Components/Home/Header'
import Contact from '../Components/Home/Contact'
import Footer from '../Components/Home/Footer'
const PulmonologyBillingService = () => {
    return (
        <>
            <div className='overflow-x-hidden'>
                <Header />
                <BillingSerives />
                <Accelerate />
                <ReduceBilling />
                <Pulmonology />
                <BilNow />
                <Managing />
                <Comprehensive />
                <Contact />
                <Footer />
            </div>
        </>
    )
}

export default PulmonologyBillingService