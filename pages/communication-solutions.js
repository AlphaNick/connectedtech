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
                pageTitle="Communication Solutions" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Communication Solutions" 
            /> 

            <div className="services-details-area pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="services-details-content">
                                <div className="services-content">
                                    <h2>Communication Solutions</h2>
                                    <p>Connected Tech can provide the advice and expertise you'll need to make an informed decision, by offering you our expert knowledge and experience on all our telecommunications Services. We do an in-depth analysis of how your business works to help identify your needs, giving you the perfect bespoke solution based on your companies needs.</p>
                                    <p>We work with some of the best telecommunications providers in the country offering our customers flexibility and support that is second to none, making sure we get the solution that's right for you the first time.</p>
                                    <div className="services-details-one">
                                        <img src="/images/services-details/services-details-1.jpg" alt="Image" />
                                    </div>
                                </div>

                                <div className="services-content">
                                    <h3>Why Choose Us?</h3>
                                    <p>We make multi-site configurations that are complex and have proven track records that help in maintaining and implementing innovative solutions that are right for your company and business, all within your budget.</p>
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