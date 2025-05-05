// src/components/About/About.jsx
import React from 'react';
import HeroAbout from '../Components/About/HeroAbout';
import WhoWeAre from '../Components/About/who-we-are';
import PillarsSection from '../Components/About/PillarsSection';
import AnimatedCards from '../Components/About/AnimatedCards';
import BillingPartners from '../Components/About/BillingPartners';
import StatsSection from '../Components/About/StatsSection';
import SplitSection from '../Components/About/SplitSection';
import TechPartners from '../Components/About/TechPartners';
import Header from '../Components/Home/Header'
import Contact from '../Components/Home/Contact'
import Footer from '../Components/Home/Footer'
const About = () => {
  return (
    <div>
      <Header/>
      <HeroAbout />
      <WhoWeAre />
      <PillarsSection />
      <AnimatedCards />
      <StatsSection />
      <BillingPartners />
      <SplitSection />
      <TechPartners />
      <Contact/>
      <Footer/>
    </div>
  );
};

export default About;
