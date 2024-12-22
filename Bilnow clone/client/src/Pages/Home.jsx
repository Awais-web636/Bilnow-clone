import React from 'react';
import Header from '../Components/Header';
import Herosec from '../Components/Herosec'
import Differt from '../Components/Differt'
import Achieve from '../Components/Achieve'
import Transform from '../Components/Transform'
import Special from '../Components/Special'
import Techpartner from '../Components/Techpartner'
import Aspect from '../Components/Aspect'
import Countersec from '../Components/Countersec'
import Schedule from '../Components/Schedule'
import Request from '../Components/Request'
import Reviews from '../Components/Reviews'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'
function Home() {
  return (
    <>
      <div className='overflow-hidden'>
        <Header />
        <Herosec />
        <Differt />
        <Achieve />
        <Transform />
        <Special />
        <Techpartner />
        <Aspect />
        <Countersec />
        <Schedule />
        <Request />
        <Reviews />
        <Contact />
        <Footer />
      </div>

    </>
  );
}

export default Home;
