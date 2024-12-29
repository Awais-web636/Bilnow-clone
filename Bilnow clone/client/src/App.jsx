import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/AboutPage'
import Blog from './Pages/Blog';
import Contactus from './Pages/Contactus';
import Privacy from './Pages/Privacy';
import Terms from './Pages/Terms';
import ScrollToTop from './Components/ScrollToTop';
import InternalMedicien from './Pages/InternalMedicienBilling';
import DermatologyBilling from './Pages/DermatologyBilling'
import NephrologyBillingServices from './Pages/NephrologyBillingServices'
import UrologyBillingServices from './Pages/UrologyBillingServices'
import PulmonologyBillingService from './Pages/PulmonologyBillingService'
import HealthBillingSerives from './Pages/HealthBillingSerives'
function App() {
  return (
    <Router>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<About/>} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/contact-us" element={<Contactus />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/terms-and-conditions" element={<Terms />} />
        <Route path="/Internal-Medicine" element={<InternalMedicien/>} />
        <Route path="/dermatology-billing" element={<DermatologyBilling/>} />
        <Route path="/nephrology-billing" element={<NephrologyBillingServices/>} />
        <Route path="/urology-billing-services" element={<UrologyBillingServices/>} />
        <Route path="/pulmonology-billing" element={<PulmonologyBillingService/>} />
        <Route path="/mental-health-billing" element={<HealthBillingSerives/>} />
      </Routes>
    </Router>
  );
}

export default App;