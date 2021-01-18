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
                pageTitle="Managed Services" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Managed Services" 
            /> 

            <div className="services-details-area pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="services-details-content">
                                <div className="services-content">
                                    <h2>Managed Services</h2>
                                    <p>Connected Tech offers the best and fully secure Managed Services that keep your business running 24/7 365 days of the year, giving you more time to focus on what's important, your business and customers</p>
                                    <p>We deliver a complete array of fully secure Managed Services based upon a multitude of services. Connecting creativity and technology into a single platform to help fuel innovation and accelerate business growth. We begin with a complete IT security health check. Succeeded by an IT operational capability assessment which benchmarks your business’s current and desired state of IT operational maturity using only the best Operations Framework. We will provide a clearly defined action plan which helps you to recognise your business goals in the form of a complete Service Delivery Plan.</p>
                                    <div className="services-details-one">
                                        <img src="/images/services-details/services-details-5.jpg" alt="Image" />
                                    </div>
                                </div>

                                <div className="services-content">
                                    <h3>What is Managed Services?</h3>
                                    <p>It is now an everyday occurrence in nearly all business models to sustain a digital alteration. Where old and on-site hardware and infrastructure get replaced with digital systems and services.</p>
                                    <p>But shifting from old to new systems and IT processes can be a daunting task. There are infinite advantages but to get the most out of digital transformation, IT teams need to have a very careful and studied method, which can be time-consuming and demand a lot of continuous work post-transformation.</p>
                                    <p>That's why Connected Tech is the number one go to in all aspects of Managed Services, we provide in-depth solutions to all your business needs for Managed Services. Call us today to discuss how we can help your business.</p>
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