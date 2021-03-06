import React from 'react';
import Navbar from '../components/_App/Navbar';
import MainBanner from '../components/HomeDemoTwo/MainBanner';
import Features from '../components/HomeDemoTwo/Features';
import OurApproach from '../components/HomeDemoTwo/OurApproach';
import OurChallenges from '../components/Common/OurChallenges';
import Services from '../components/HomeDemoTwo/Services';
import WhyChooseUs from '../components/HomeDemoTwo/WhyChooseUs';
import GetInTouchFormTwo from '../components/Common/GetInTouchFormTwo';
import Footer from '../components/_App/Footer';

const Index2 = () => {
    return (
        <React.Fragment>
            <Navbar />
            <MainBanner />
            <Features />
            <OurApproach />
            <OurChallenges />
            <Services />
           
            <WhyChooseUs />
          
            <GetInTouchFormTwo />

           

            <Footer />
        </React.Fragment>
    )
}

export default Index2;