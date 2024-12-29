import React from 'react'
import Financial from '../Components/Nephrology Billing/Financial'
import CodeitRight from '../Components/Nephrology Billing/CodeitRight'
import EthicalBilling from '../Components/Nephrology Billing/EthicalBilling'
import BillingSolution from '../Components/Nephrology Billing/BillingSolutions'
import DedicatedSupport from '../Components/Nephrology Billing/DedicatedSupport'
import Flexible from '../Components/Nephrology Billing/Flexible'
import AddingValue from '../Components/Nephrology Billing/AddingValue'
import Header from '../Components/Home/Header'
import Contact from '../Components/Home/Contact'
import Footer from '../Components/Home/Footer'
const NephrologyBillingServices = () => {
  return (
  <>
  <div className='overflow-x-hidden'>
  <Header/>
  <Financial />
  <CodeitRight />
  <DedicatedSupport />
  <AddingValue />
  <EthicalBilling />
  <Flexible />
  <BillingSolution />
  <Contact/>
  <Footer/>
  </div>
  </>
  )
}

export default NephrologyBillingServices