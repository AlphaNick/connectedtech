import React from 'react';
import NavbarFive from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import RelatedServices from '../components/Services/RelatedServices';
import ServiceSidebar from '../components/Services/ServiceSidebar';
import Footer from '../components/_App/Footer';

const ServicesDetails = () => {
    return (
        <React.Fragment>
            <NavbarFive />
            <PageBanner 
                pageTitle="Cloud Computing" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Cloud Computing" 
            /> 

            <div className="services-details-area pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="services-details-content">
                                <div className="services-content">
                                    <h2>Cloud Computing</h2>
                                    <p>Connected Tech provides your company with expert knowledge and cloud-based IT solutions. We provide your company with the best solutions to cloud computing based on your individual requirements.</p>
                                    <p>Connected Tech will help you build the right cloud computing solution for your company, by setting the correct strategy and plan of action to ensure that your companies IT Structure is aligned with your companies needs and goals.</p>
                                    <div className="services-details-one">
                                        <img src="/images/services-details/services-details-2.jpg" alt="Image" />
                                    </div>
                                </div>

                                <div className="services-content">
                                    <h3>The Cloud Computing We Offer</h3>
                                    <p>We use our proven methodologie based on a companies needs and dont just use our cloud computing services and catch all solution. We work with companies to enable secure remote working, to offer your employees to work from home or another office and stay connected. </p>
                                    <p>Connected Tech comprises a number of applications that are available on the cloud platform to do specific tasks and link to other applications and services</p>
                                </div>

                             

                                <RelatedServices />
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <ServiceSidebar />
                        </div>
                    </div>
                </div>
            </div>
        
            <Footer />
        </React.Fragment>
    )
}

export default ServicesDetails;