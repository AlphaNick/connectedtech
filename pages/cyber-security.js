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
                pageTitle="Cyber Security" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Cyber Security" 
            /> 

            <div className="services-details-area pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="services-details-content">
                                <div className="services-content">
                                    <h2>Cyber Security</h2>
                                    <p>Cyber security is a very real threat to many companies and individuals. There is a lot to be concerned about in the world of Cyber Security, from external threats, internal vulnerabilities, data security, architecting cloud computing and secure networks</p>
                                    <p>Putting a plan in place for these threats and vulnerabilities is a must for any company, we provide you with audits and compliance, test your security measures and put in place exactly what you need to be safe and secure, and also help you sleep at night.</p>
                                    <p>Connected Tech offers companies simple solutions and suggestions to make your workplace more secure. Call us today for a free quotation and discuss what your company needs.</p>
                                    <div className="services-details-one">
                                        <img src="/images/services-details/services-details-1.jpg" alt="Image" />
                                    </div>
                                </div>

                                <div className="services-content">
                                    <h3>What Connected Tech bring you</h3>
                                    <p>With Connected Tech, we will take away the worry of cyber security. We will give you the complete peace of mind that you are both compliant and covered.</p>
                                    <p>We take cyber threats very seriously. At Connected Tech we provide the best cyber security methods, unique technologies and robust processes into an end-to-end managed services, along with Communication Solutions, Consultancy and Strategy</p>
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