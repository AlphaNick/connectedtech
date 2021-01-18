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
                pageTitle="Consultancy &amp; Strategy" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Consultancy &amp; Strategy" 
            /> 

            <div className="services-details-area pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="services-details-content">
                                <div className="services-content">
                                    <h2>Consultancy &amp; Strategy</h2>
                                    <p>At Connected Tech we partner with our clients to help plan, strategise and execute an efficient IT plan, following it with your overarching business goals. We’ll assure all portions of your technology work collectively to provide an evaluated return on investment, and that they’re all strategically stable.</p>
                                    <p>From commercial enterprises to start-up companies, through various sectors, we can support a wide range of businesses accomplish their business aims through an effective IT strategy plan. We can support your own IT teams, by acting as a part of the team, giving you another professionals opinion and view.</p>
                                    <div className="services-details-one">
                                        <img src="/images/services-details/services-details-1.jpg" alt="Image" />
                                    </div>
                                </div>

                                <div className="services-content">
                                    <h3>Why Choose Us?</h3>
                                    <p>We’ll help you deliver digital transformation, taht will evolutionise the way your business works. But it can be dangerous when it comes to choosing the right company and services to help with your needs, particularly if you don’t have the correct knowledge and skills in place to make an informed decision. </p>
                                    <p>Connected Tech offers a strategic plan that uses our high-level expertise to support you to achieve real digital improvements. Help meet your business goals and offer guidance and direction on transformative technology that will achieve results time and time again</p>
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