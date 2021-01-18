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
                pageTitle="Helpdesk" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Helpdesk" 
            /> 

            <div className="services-details-area pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="services-details-content">
                                <div className="services-content">
                                    <h2>Helpdesk</h2>
                                    <p>We help bulk up your internal IT resources and move from ordinary support to decisive business enablers and succeed challenges quicker, by choosing Connected Tech you can feel safe that you're in the right hands.</p>
                                    <p>Increase your capabilities &amp; boost your IT operations by using the resources Connected Tech can offer, with our experience and technology we take on your day-to-day challenges and give you the support your business needs</p>
                                    <div className="services-details-one">
                                        <img src="/images/services-details/services-details-4.jpg" alt="Image" />
                                    </div>
                                </div>

                                <div className="services-content">
                                    <h3>Our Helpdesk Services</h3>
                                    <p>We are dedicated to providing our customers with excellent support and experience, solving your technical issues swiftly and efficiently, all by a certified and tenured technical engineer.</p>
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