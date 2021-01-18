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
                pageTitle="Business Continuity" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Business Continuity" 
            /> 

            <div className="services-details-area pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="services-details-content">
                                <div className="services-content">
                                    <h2>Business Continuity</h2>
                                    <p>At Connected Tech we support your companies software compliance, provide comprehensive sloutions and identify resk, giving your company management solutions that work time and time again.</p>
                                    <p>We tailor our backup and continiutiy solutions to suit your companies needs, whether it's a single backup or server downtime, we aim to find the right solution for the problem and keep your business running. </p>
                                    <p>Connected Tech have the best systems in place to work on your solutions remotley, giving you more time to focus on your business.</p>
                                    <div className="services-details-one">
                                        <img src="/images/services-details/services-details-3.jpg" alt="Image" />
                                    </div>
                                </div>

                                <div className="services-content">
                                    <h3>Why is it Important?</h3>
                                    <p>If your data is non-existent you have no business, the cost of downtime can be big, revenue dops, orders lost, damage to files that can't be replaced, you can even incur fines, if you don't have a plan of action in place, then disaster can strike, that's why at Connected Tech we offer bespoke solutions that are right for your business. Contact us today to discuss what we can offer your business.</p>
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