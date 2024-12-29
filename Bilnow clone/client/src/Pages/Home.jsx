import React from 'react';
import Header from '../Components/Home/Header';
import Herosec from '../Components/Home/Herosec'
import Differt from '../Components/Home/Differt'
import Achieve from '../Components/Home/Achieve'
import Transform from '../Components/Home/Transform'
import Special from '../Components/Home/Special'
import Techpartner from '../Components/Home/Techpartner'
import Aspect from '../Components/Home/Aspect'
import Countersec from '../Components/Home/Countersec'
import Schedule from '../Components/Home/Schedule'
import Request from '../Components/Home/Request'
import Reviews from '../Components/Home/Reviews'
import Contact from '../Components/Home/Contact'
import Footer from '../Components/Home/Footer'
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
